import s from './index.module.css';
import imgCardBackSide from './img/card-back-side.jpg'
import {useState} from 'react';

const PokemonCard = ({name, img, values, id, type}) => {

    const [isActive, setIsActive] = useState(false);

    const handleCardClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={s.root} onClick={handleCardClick}>
            <div className={`${s.pokemonCard} ${isActive ? s.active : ''}`}>
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        <div className={`${s.pokemon} ${type}`}>
                            <div className={s.values}>
                                <div className={`${s.count} ${s.top}`}>{values.top}</div>
                                <div className={`${s.count} ${s.right}`}>{values.right}</div>
                                <div className={`${s.count} ${s.bottom}`}>{values.bottom}</div>
                                <div className={`${s.count} ${s.left}`}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={`${s.wrap} ${s.back}`}>
                        <img src={imgCardBackSide} alt="Сard Backed"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;