import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import PokemonCard from "./components/PokemonCard";

import imgBg1 from './img/bg1.jpg';
import imgBg2 from './img/bg3.jpg';

import pokemons from './data/pokemons.json';

const App = () => (
    <>
        <Header
            title="Pokemon Game"
            descr="This is a simple triple triad card game"
        />
        <Layout
            id="rules"
            title="Rules"
            urlBg={imgBg1}
        >
            <p>In the game two players face off against one another, one side playing as "blue", the other as "red"
                on a 3x3 grid.</p>
            <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them
                into the player's own color of red or blue.</p>
        </Layout>
        <Layout
            id="cards"
            title="Card"
            colorBg="#e2e2e2"
        >
            <div className="flex">
                {
                    pokemons
                        ? pokemons.map((pokemon) => <PokemonCard
                            name={pokemon.name}
                            img={pokemon.img}
                            values={pokemon.values}
                            id={pokemon.id}
                            type={pokemon.type}
                            key={pokemon.id}
                        />)
                        : ''
                }
            </div>
        </Layout>
        <Layout
            id="about"
            title="Full Rules"
            urlBg={imgBg2}
        >
            <p>To win, a majority of the total ten cards played (including the one card that is not placed on the
                board) must be of the player's card color. To do this, the player must capture cards by placing a
                card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch
                will be compared. If the rank of the opponent's card is higher than the player's card, the
                player's card will be captured and turned into the opponent's color. If the player's rank is
                higher, the opponent's card will be captured and changed into the player's color instead.</p>
        </Layout>
        <Footer/>
    </>
);

export default App;
