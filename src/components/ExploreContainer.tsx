import { IonList, IonContent, IonItem, IonAvatar, IonLabel, IonText } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import "./ExploreContainer.css";

interface ContainerProps {
    name: string;
    users: any[];
}

const ExploreContainer: React.FC<ContainerProps> = ({ users }) => {
    return (
        <IonContent>
            <IonList lines="full">
                {users.map((user) => (
                    <Link
                        to={{
                            pathname: "profiles/detail",
                            state: { fromExploreContainer: user },
                        }}
                        key={user.login.uuid}
                        id="user-link"
                    >
                        <IonItem button detail={true}>
                            <IonAvatar id="ion-item" slot="start">
                                <img alt="thumbnail" src={user.picture.thumbnail} />
                            </IonAvatar>
                            <IonLabel id="ion-item">
                                <IonText color="primary">
                                    <h2 id="user-name-age">
                                        {user.name.first + ", " + user.dob.age}
                                    </h2>
                                </IonText>
                            </IonLabel>
                        </IonItem>
                    </Link>
                ))}
            </IonList>
        </IonContent>
    );
};

export default ExploreContainer;
