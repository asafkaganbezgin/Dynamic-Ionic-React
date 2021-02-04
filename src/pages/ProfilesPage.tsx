import {
    IonButtons,
    IonContent,
    IonLoading,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonToolbar,
    IonText,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./ProfilesPage.css";

const Page: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [users, setUsers] = useState<any[]>([]);
    const [count, setCount] = useState<number>(0);
    let t_out: any;

    // Connect to the wunder-provider.herokuapp.com via websocket and parse the message sent from the server.
    const connect = () => {
        var counter = 0; // Counts the number of user objects received from the server.

        // Create a websocket connection.
        let webSocket = new WebSocket(
            "wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket"
        );

        // Display a message on console if the handshake has been made.
        webSocket.onopen = () => {
            console.log("Connected to the server via websocket");
        };

        /* Strip user info from the message sent by the server and pass the
            stripted user object in to the users state variable. */
        webSocket.onmessage = (message) => {
            if (message.data.substr(0, 2) === "42") {
                counter += 1;
                const stringToBeParsed = message.data.substr(2);
                const userObject = JSON.parse(stringToBeParsed);
                setUsers((prevState) => [...prevState, userObject[1].results[0]]);
                setCount((count) => count + 1);
            }
            // If the number of received users equal to 50, stop receiving message and close socket.
            if (counter === 50) {
                webSocket.close();
                clearTimeout(t_out);
                console.log("Connection is closed due to high number of users!");
                return;
            }
        };

        /* Display a message on console if the connection between server and client has ended.
            If the user count is below 50, reconnect to the server. */
        webSocket.onclose = () => {
            console.log("Disconnected from the server!");
            if (counter < 50) {
                t_out = setTimeout(() => {
                    connect();
                }, 2000);
            }
        };
    };

    const isLoading = () => {
        if (count === 0) {
            return true;
        } else return false;
    };

    useEffect(() => {
        connect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <IonPage>
            <IonLoading
                isOpen={isLoading()}
                message={"Fetching users from the server..."}
            />

            <IonContent fullscreen>
                <IonHeader mode="ios">
                    <IonToolbar>
                        <IonText color="light">
                            <h2 id="menu-title">PROFILES</h2>
                        </IonText>
                        <IonButtons slot="end">
                            <IonMenuButton id="menu-button" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name={name} users={users} />
            </IonContent>
        </IonPage>
    );
};

export default Page;
