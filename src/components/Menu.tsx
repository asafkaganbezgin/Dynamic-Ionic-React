import { IonContent, IonMenu, IonRow, IonText } from "@ionic/react";

import React from "react";
import "./Menu.css";

const Menu: React.FC = () => {
    return (
        <IonMenu contentId="main" type="overlay" side="end">
            <IonContent>
                <IonRow id="menu">
                    <h1>
                        <IonText color="light">Welcome!</IonText>
                    </h1>
                    <p>
                        This is a simple ionic react application which fetch randomly
                        generated user information via websocket.
                    </p>
                    <h2>
                        <IonText color="primary">Important</IonText>
                    </h2>
                    <ol>
                        <li>
                            <p>
                                When you first start the application, the program is going
                                to run without any errors. However, the UI is implemented
                                according to a mobile design. Therefore, to be able to get
                                the best experience from the application, please open
                                developer tools of current web browser you are using. Then
                                toggle <IonText color="danger">device toolbar</IonText>{" "}
                                option (could be located at top left corner of developer
                                tools screen). After executing the previous step, select
                                iPhone X (or your favorite mobile device) located at top
                                of your application on web browser.
                            </p>
                        </li>
                        <li>
                            <p>
                                The users fetched via websocket supposed to generate a new
                                user every 3-15 seconds. However, from time to time,
                                system sends multiple users within a minute and
                                application receives tremendous amount of users in a very
                                short amount of time. Therefore, the number of users which
                                are going to be fetched from the server is limited to 50
                                so that the application is not going to be bloated by
                                server.
                            </p>
                        </li>
                        <li>
                            <p>
                                After displaying details of the selected user from
                                profiles page, you are going to see a google maps
                                integration which pinpoints the latitude and longitude
                                values provided by the server. However, the location
                                values are randomly generated as well. Therefore, the
                                location mark shows odd places (antartica, middle of the
                                ocean, etc...) from time to time. When too much zoom is
                                added to the map as a default option in order to see the
                                streets of a city, the map looks like it is showing a
                                blank background. It is not correct since when you zoom in
                                to middle of an ocean, you are going to see nothing but a
                                blank background. In order to prevent that, default zoom
                                level is pretty low and the map looks like a world map.
                            </p>
                        </li>
                    </ol>
                </IonRow>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
