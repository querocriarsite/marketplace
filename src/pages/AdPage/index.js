import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
// ================ Plugin de slide ================ //
import "react-alice-carousel/lib/alice-carousel.css";
import Slideshow from 'react-alice-carousel';
// ================================================= //
import {
    PageArea,
    Fake,
    OthersArea,
    BreadChumb,
    RightArrow,
    HomePag
} from "./styles";
import useApi from "../../helpers/MarketplaceAPI";
import {PageContainer} from "../../Styles";
import AdItem from "../../components/partials/AdItem";

const AdPage = () => {
    const api = useApi();
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        };
        getAdInfo(id);
    }, [api, id]);

    const formatDate = (date) => {
        const cDate = new Date(date);
        const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        const cDay = cDate.getDate();
        const cMonth = cDate.getMonth();
        const cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    return (
        <PageContainer>
            {adInfo.category &&
            <BreadChumb>
                <Link to="/"><HomePag/> </Link>
                <RightArrow/>
                <Link to={`/ads?state=${adInfo.stateName}`}
                > {adInfo.stateName} </Link>
                <RightArrow/>
                <Link
                    to={`ads:state=${adInfo.stateName}&cat=${adInfo.category.slug}`}
                > {adInfo.category.name} </Link>
                <RightArrow/> {adInfo.title}
            </BreadChumb>
            }

            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={300}/>}
                            {adInfo.images &&
                            <Slideshow
                                autoPlayInterval={5000}
                                autoPlay={true}
                                fadeOutAnimation={true}
                                duration={400}
                            >
                                {adInfo.images.map((img, k) =>
                                    <img key={k} src={img} alt=""
                                         className="yours-custom-class"/>
                                )}
                            </Slideshow>
                            }
                        </div>
                        <div className="adInf">
                            <div className="adName">
                                {loading && <Fake height={20}/>}
                                {adInfo.title &&
                                <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                <small>
                                    Criado em {formatDate(adInfo.dateCreated)}
                                </small>
                                }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={100}/>}
                                {adInfo.description}
                                <hr/>
                                {adInfo.views &&
                                <small>Visualizações: {adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box-p">
                        {loading && <Fake height={20}/>}
                        <div className="price">
                            <span>
                        {adInfo.priceNegotiable &&
                        'Preço Negociável'}
                            </span>
                        </div>
                        {!adInfo.priceNegotiable && adInfo.price &&
                        <div className="price">
                            Preço: <span>
                            {adInfo.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </span>
                        </div>
                        }
                    </div>
                    {loading && <Fake height={50}/>}
                    {adInfo.userInfo &&
                    <>
                        <a href={`mailto:${adInfo.userInfo.email}`}
                           className="contactSellerLink">
                            Fale com o vendedor</a>
                        <div className="createdBy box box-p">
                            <strong>{adInfo.userInfo.name}</strong>
                            <small>E-mail: {adInfo.userInfo.email}</small>
                            <small>Estado: {adInfo.stateName}</small>
                        </div>
                    </>
                    }
                </div>
            </PageArea>

            <OthersArea>
                {adInfo.others &&
                <>
                    <h2>Outras ofertas do vendedor</h2>
                    <div className="list">
                        {adInfo.others.map((i, k) =>
                            <AdItem key={k} data={i}/>
                        )}
                    </div>
                </>
                }
            </OthersArea>

        </PageContainer>
    );
};

export default AdPage;
