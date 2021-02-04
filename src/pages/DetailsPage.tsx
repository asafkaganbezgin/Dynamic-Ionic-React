import {
    IonAvatar,
    IonBackButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonPage,
    IonRow,
    IonText,
    IonToolbar,
} from "@ionic/react";
import {
    female,
    homeOutline,
    mailOutline,
    male,
    phonePortraitOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./DetailsPage.css";

import Map from "../components/Map";

const DPage: React.FC = () => {
    const location: any = useLocation();
    const [data, setData] = useState<any>({});

    /* Diplay jsx expression (ionic icon for gender) depending on the gender data
        received from the server. */
    const findGender = () => {
        if (data?.gender === "female") {
            return <IonIcon className="gender-icon" icon={female}></IonIcon>;
        } else if (data?.gender === "male") {
            return <IonIcon className="gender-icon" icon={male}></IonIcon>;
        }
        return "No gender info provided!";
    };

    useEffect(() => {
        setData(location.state.fromExploreContainer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <IonPage id="details">
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton text="" defaultHref="/page/profiles" />
                        </IonButtons>
                        <IonText color="light">
                            <h2 id="menu-title">PROFILE DETAILS</h2>
                        </IonText>
                    </IonToolbar>
                </IonHeader>
                <IonRow>
                    <IonCol size="5">
                        <IonAvatar id="detail-avatar">
                            <IonImg src={data?.picture?.large}></IonImg>
                        </IonAvatar>
                    </IonCol>
                    <IonCol id="section-1-right">
                        <p id="font-default">
                            <IonText color="light">Name</IonText>
                        </p>
                        <p id="font-default" className="font-name">
                            <IonText color="primary">
                                {data?.name?.first + " " + data?.name?.last}
                            </IonText>
                        </p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="cnt" size="2">
                        <IonIcon className="basic-icon" icon={homeOutline}></IonIcon>
                    </IonCol>
                    <IonCol className="cnt" size="4">
                        <p>{data?.phone}</p>
                    </IonCol>
                    <IonCol className="cnt" size="2">
                        <IonIcon
                            className="basic-icon"
                            icon={phonePortraitOutline}
                        ></IonIcon>
                    </IonCol>
                    <IonCol className="cnt" size="4">
                        <p>{data?.cell}</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="cnt" size="2">
                        <IonIcon className="basic-icon" icon={mailOutline}></IonIcon>
                    </IonCol>
                    <IonCol className="cnt cnt-mail">
                        <p>{data?.email}</p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <Map data={data} />
                </IonRow>
                <IonRow>
                    <IonCol className="bd" id="col-1">
                        <h6>
                            <IonText color="light">Gender</IonText>
                        </h6>
                        {findGender()}
                    </IonCol>
                    <IonCol className="bd" id="col-2">
                        <h6>
                            <IonText color="light">Age</IonText>
                        </h6>
                        <h1>
                            <IonText color="primary">{data?.dob?.age}</IonText>
                        </h1>
                    </IonCol>
                    <IonCol className="bd" id="col-3">
                        <h6>
                            <IonText color="light">Nationality</IonText>
                        </h6>
                        <h1>
                            <IonText color="primary">{data?.nat}</IonText>
                        </h1>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default DPage;
