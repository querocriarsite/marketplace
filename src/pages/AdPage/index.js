import React, {useState} from "react";
import {PageArea} from "./styles";
import useApi from "../../helpers/MarketplaceAPI";
import {PageContainer} from "../../Styles";

const AdPage = () => {
    const api = useApi();

    return (
        <PageContainer>
            <PageArea>

            </PageArea>
        </PageContainer>
    );
};

export default AdPage;
