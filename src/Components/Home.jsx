import React from "react";
import HomeBanner from "../images/HomeBanner/HomeBanner_hmwvoh_c_scale,w_1143.png";
import PlaceholderImg from "../images/placeholder.jpg";

const Home = ({nowShowingFilms}) => {
    const films = nowShowingFilms.map(currentFilm => {
        return (
            <td className="now-showing-card">
                <img src={"../images/films/" + currentFilm.shortname + "/nowshowing/" + currentFilm.nowShowingSrcset.small} />
                <h4>{currentFilm.title.toUpperCase()}</h4>
            </td>
        );
    });
    return (<div>
        <img className="top" src={HomeBanner} />
        <div className="left">
            <p>
                Donec fringilla orci sagittis tempor tincidunt. Sed nec luctus erat. Nunc posuere aliquet sem, eget feugiat arcu.
                Vivamus vel luctus orci. Vivamus quis sem sapien. Aliquam aliquet dolor vel cursus feugiat. Integer nunc ipsum,
                pellentesque eget consectetur ac, vestibulum et mauris. Morbi feugiat enim eget sem rutrum congue. Donec eleifend
                sodales dictum.
            </p>
            <img className="middle" src={PlaceholderImg} />
            <p>
                Ut faucibus eros sit amet eros hendrerit, at luctus risus maximus. Proin porttitor consectetur diam, id aliquet eros ornare non.
                Mauris tempor fringilla diam quis ultricies. Nulla facilisi. Sed egestas volutpat egestas. Cras ornare risus ut eros malesuada,
                at egestas libero ornare. Nulla non lacus dapibus, ullamcorper augue vel, ultrices nibh. Aliquam vulputate mi sit amet faucibus euismod.
                Fusce congue scelerisque lectus, non mattis nulla mattis a.
            </p>

        </div>
        <div className="right">
            <p>
                Donec fringilla orci sagittis tempor tincidunt. Sed nec luctus erat. Nunc posuere aliquet sem, eget feugiat arcu.
                Vivamus vel luctus orci. Vivamus quis sem sapien. Aliquam aliquet dolor vel cursus feugiat. Integer nunc ipsum,
                pellentesque eget consectetur ac, vestibulum et mauris. Morbi feugiat enim eget sem rutrum congue. Donec eleifend
                sodales dictum.
            </p>
            <img className="bottom" src={PlaceholderImg} />
        </div>
        <div>
            <h4>NOW SHOWING</h4>
            <table>
                <tr>
                    {films}
                </tr>
            </table>
        </div>
    </div>);
}

export default Home;