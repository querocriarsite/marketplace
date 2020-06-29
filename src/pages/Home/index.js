import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {PageArea, SearchArea} from "./styles";
import useApi from "../../helpers/MarketplaceAPI";
import {PageContainer} from "../../Styles";
import AdItem from "../../components/partials/AdItem";

const Home = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const ctgs = await api.getCategories();
            setCategories(ctgs);
        }
        getCategories();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input
                                type="text"
                                name="q"
                                placeholder="O que você procura?"/>
                            <select name="state">
                                <option/>
                                {stateList.map((i, k) =>
                                    <option key={k} value={i.name}>
                                        {i.name}
                                    </option>
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>

                    <div className="categoryList">
                        {categories.map((i, k) =>
                            <Link key={k} to={`/ads?cat=${i.slug}`}
                                  className="categoryItem">
                                <img src={i.img} alt="Categoria"/>
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>

            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i, k) =>
                            <AdItem key={k} data={i}/>
                        )}
                    </div>
                    <Link className="seeAllLink" to="/ads">Ver Todos</Link>

                    <hr/>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad aliquam asperiores at aut consequatur excepturi facilis
                    ipsa laborum maiores nemo odio placeat praesentium, quas,
                    quasi quisquam suscipit ullam unde veritatis.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad aliquam asperiores at aut consequatur excepturi facilis
                    ipsa laborum maiores nemo odio placeat praesentium, quas,
                    quasi quisquam suscipit ullam unde veritatis.
                </PageArea>
            </PageContainer>
        </>
    );
};

export default Home;
