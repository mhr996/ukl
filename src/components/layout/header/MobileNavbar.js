import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
  const navItems = getNavItems() || [];

  const renderPagesMenu = (pagesNav) => (
    <MobileMenuItem
      text={pagesNav?.name}
      url={pagesNav?.path}
      submenuClass={"header__mega-menu mega-menu mega-menu-pages"}
    >
      <li>
        <div className="mega-menu-wrapper">
          {pagesNav?.submenu?.length
            ? pagesNav?.submenu?.map((pageItem, idx) => (
                <div key={idx} className="mega-menu-pages-single">
                  <div className="mega-menu-pages-single-inner">
                    <h6 className="mega-menu-title">{pageItem?.name}</h6>
                    <div className="mega-menu-list">
                      {pageItem?.items?.length
                        ? pageItem?.items?.map((item, idx2) => (
                            <Link
                              key={100 + idx2}
                              href={item?.path ? item?.path : "/"}
                              className={item?.isActive ? "active" : ""}
                            >
                              {item?.name}
                              {item?.badge ? (
                                <span
                                  className={`mega-menu-badge ${
                                    item?.badge === "HOT"
                                      ? "mega-menu-badge-hot"
                                      : ""
                                  }`}
                                >
                                  {item?.badge}
                                </span>
                              ) : (
                                ""
                              )}
                            </Link>
                          ))
                        : ""}
                    </div>
                  </div>
                </div>
              ))
            : ""}
          <div className="col-12 col-lg-3 mega-menu-pages-single">
            <div className="mega-menu-pages-single-inner">
              <div className="feature-box">
                <div className="feature-content">
                  <h2 className="title">Modern</h2>
                  <span>Home Makeover</span>
                  <Link
                    className="read-more feature-contact"
                    href="tel:8321890640"
                  >
                    <i className="tji-phone-3"></i>
                    <span>+8 (321) 890-640</span>
                  </Link>
                </div>
                <div className="feature-images">
                  <Image
                    src="/images/service/service-ad.webp"
                    alt=""
                    width={370}
                    height={370}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </MobileMenuItem>
  );

  const renderServicesMenu = (serviceNav) => (
    <MobileMenuItem
      text={serviceNav?.name}
      url={serviceNav?.path ? serviceNav?.path : "#"}
      submenuClass={"mega-menu-service"}
    >
      {serviceNav?.submenu?.length
        ? serviceNav?.submenu?.map((group, gIdx) =>
            group?.items?.length
              ? group?.items?.map((item, idx) => (
                  <li key={`${gIdx}-${idx}`}>
                    <Link
                      className="mega-menu-service-single"
                      href={item?.path ? item?.path : "/"}
                    >
                      <span className="mega-menu-service-icon">
                        <i
                          className={item?.icon ? item?.icon : "tji-service-1"}
                        ></i>
                      </span>
                      <span className="mega-menu-service-title">
                        {item?.name
                          ? item?.name
                          : "Business process optimization"}
                      </span>
                      <span className="mega-menu-service-nav">
                        <i className="tji-arrow-right-long"></i>
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </Link>
                  </li>
                ))
              : ""
          )
        : ""}
    </MobileMenuItem>
  );

  const renderGenericWithSubmenu = (item) => (
    <MobileMenuItem text={item?.name} url={item?.path || "#"}>
      {item?.submenu?.length
        ? item?.submenu?.map((group, gIdx) =>
            group?.items?.length ? (
              group?.items?.map((sub, sIdx) => (
                <li key={`${gIdx}-${sIdx}`}>
                  <Link href={sub?.path || "#"}>{sub?.name || "Item"}</Link>
                </li>
              ))
            ) : (
              <li key={gIdx}>
                <Link href={group?.path || "#"}>{group?.name || "Item"}</Link>
              </li>
            )
          )
        : ""}
    </MobileMenuItem>
  );

  const renderItem = (item, idx) => {
    if (item?.name === "Pages") return renderPagesMenu(item);
    if (item?.name === "Services") return renderServicesMenu(item);
    if (item?.submenu?.length) return renderGenericWithSubmenu(item);
    return (
      <li key={idx} className={idx === navItems.length - 1 ? "mean-last" : ""}>
        <Link href={item?.path || "#"}>{item?.name}</Link>
      </li>
    );
  };

  return (
    <div className="hamburger_menu">
      <div className="mobile_menu mean-container">
        <div className="mean-bar">
          <Link
            href="#nav"
            className="meanmenu-reveal"
            style={{ right: 0, left: "auto" }}
          >
            <span>
              <span>
                <span></span>
              </span>
            </span>
          </Link>
          <nav className="mean-nav">
            <ul>{navItems.map((item, idx) => renderItem(item, idx))}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
