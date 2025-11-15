"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useIsSticky from "@/hooks/useIsSticky";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ContactMenu from "./ContactMenu";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import { searchPages } from "@/libs/searchContent";

const Header = ({
  headerType = 1,
  isHeaderTop = false,
  topbarType = 1,
  isStickyHeader = false,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const isSticky = useIsSticky(isStickyHeader);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length >= 3) {
      const results = searchPages(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      const topResult = searchResults[0];
      if (topResult.url.startsWith("mailto:")) {
        window.location.href = topResult.url;
      } else {
        router.push(topResult.url);
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    }
  };

  const handleResultClick = (url) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      router.push(url);
    }
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleContactTogglerClick = () => {
    setIsContactOpen(true);
  };
  const handleMobileTogglerClick = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <>
      {/* <!-- start: Offcanvas Menu --> */}
      <ContactMenu
        isContactOpen={isContactOpen}
        setIsContactOpen={setIsContactOpen}
      />
      {/* <!-- end: Offcanvas Menu --> */}

      {/* <!-- start: Offcanvas Menu --> */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {/* <!-- end: Offcanvas Menu --> */}

      {/* Search Popup --> */}
      <div
        className={`search-popup-overlay ${
          isSearchOpen ? "search-popup-overlay-open" : ""
        }`}
        onClick={() => setIsSearchOpen(false)}
      ></div>
      <header
        className={`header-area ${
          headerType === 3
            ? "header-3"
            : headerType === 2
            ? "header-2"
            : "header-1"
        } section-gap-x ${
          isStickyHeader
            ? `header-duplicate header-sticky ${isSticky ? "sticky" : ""}`
            : "header-absolute"
        } `}
      >
        {isHeaderTop && <HeaderTop type={topbarType} />}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* <!-- site logo --> */}
                <Logo headerType={headerType} isStickyHeader={isStickyHeader} />

                {/* <!-- navigation --> */}
                <Navbar />
                {/* <!-- header right info --> */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  {headerType === 4 ? (
                    <Link
                      className="header-contact d-none d-xl-inline-flex"
                      href="tel:0096566479911"
                    >
                      <span className="call-icon">
                        <i className="tji-phone"></i>
                      </span>
                      <span className="call-text">+965-664-799-11</span>
                    </Link>
                  ) : (
                    <div className="header-search">
                      <button
                        className={`search  ${
                          isSearchOpen ? "search-hide" : ""
                        }`}
                        onClick={() => setIsSearchOpen(true)}
                      >
                        <i className="tji-search"></i>
                      </button>
                      <button
                        type="button"
                        className={`search_close_btn ${
                          isSearchOpen ? "close-show" : ""
                        }`}
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 1L1 17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 1L17 17"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  )}

                  <div className="header-button">
                    <ButtonPrimary text={"Let’s Talk"} url={"/contact"} />
                  </div>
                  {headerType !== 3 && (
                    <div
                      className="menu_bar menu_offcanvas d-none d-lg-inline-flex"
                      onClick={handleContactTogglerClick}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  )}
                </div>

                {/* <!-- menu bar --> */}
                <div
                  className="menu_bar mobile_menu_bar d-lg-none"
                  onClick={handleMobileTogglerClick}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Search Popup --> */}
        <div className={`search_popup ${isSearchOpen ? "search-opened" : ""}`}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="tj_search_wrapper">
                  <div className="search_form">
                    <form onSubmit={handleSearchSubmit}>
                      <div className="search_input">
                        <div className="search-box">
                          <input
                            className="search-form-input"
                            type="text"
                            placeholder="Search pages, services, or content..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            autoFocus
                          />
                          <button type="submit">
                            <i className="tji-search"></i>
                          </button>
                        </div>

                        {/* Search Results */}
                        {searchResults.length > 0 && (
                          <div className="search-results">
                            {searchResults.slice(0, 8).map((result, index) => (
                              <div
                                key={index}
                                className="search-result-item"
                                onClick={() => handleResultClick(result.url)}
                              >
                                <h6 className="result-title">{result.title}</h6>
                                <p className="result-snippet">
                                  {result.matchedText}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {searchQuery &&
                          searchQuery.trim().length >= 3 &&
                          searchResults.length === 0 && (
                            <div className="search-no-results">
                              <p>No results found for "{searchQuery}"</p>
                            </div>
                          )}

                        {searchQuery &&
                          searchQuery.trim().length > 0 &&
                          searchQuery.trim().length < 3 && (
                            <div className="search-no-results">
                              <p>Type at least 3 characters to search</p>
                            </div>
                          )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
