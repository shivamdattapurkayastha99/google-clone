import React from 'react'
import useGoogleSearch from '../useGoogleSearch';
import './Searchpage.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search"
import DescriptionIcon from "@material-ui/icons/Description"
import Image, { ImageSearch } from "@material-ui/icons"
import LocalOffer from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import { MoreVert } from '@material-ui/icons';
const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" width="272" height="92" alt="" className="searchPage_logo" />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons></Search>
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageSearch />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOffer />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVert />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {true && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a href={item.link}>{item.displayLink}</a>
                            <a href={item.link} className="searchPage_resultTitle"><h2>{item.title}</h2></a>


                            {/* }) */}
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>

                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}

export default SearchPage
