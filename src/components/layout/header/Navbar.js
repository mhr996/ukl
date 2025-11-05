import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
  const makeActiveLink = useActiveLink();
  const navItems = getNavItems() || [];
  const items = (navItems || []).map((n) => makeActiveLink(n)).filter(Boolean);

  const renderPagesMenu = (pagesNav, key) => (
    <li
      key={key}
      className={`has-dropdown ${
        pagesNav?.isActive ? "current-menu-ancestor" : ""
      }`}
    >
      <Link href={pagesNav?.path || "#"}>{pagesNav?.name}</Link>
      <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
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
                    <img src="/images/service/service-ad.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );

  const renderServicesMenu = (serviceNav, key) => (
    <li
      key={key}
      className={`has-dropdown ${
        serviceNav?.isActive ? "current-menu-ancestor" : ""
      }`}
    >
      <Link href={serviceNav?.path ? serviceNav?.path : "#"}>
        {serviceNav?.name}
      </Link>
      <ul className="sub-menu mega-menu-service mega-menu-service-two-column">
        {serviceNav?.submenu?.length
          ? serviceNav?.submenu?.map((group, groupIdx) =>
              group?.items?.length
                ? group?.items?.map((item, idx) => (
                    <li key={`${groupIdx}-${idx}`}>
                      <Link
                        className="mega-menu-service-single"
                        href={item?.path ? item?.path : "/"}
                      >
                        <span className="mega-menu-service-icon">
                          <i
                            className={
                              item?.icon ? item?.icon : "tji-service-1"
                            }
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
      </ul>
    </li>
  );

  const renderGenericWithSubmenu = (item, key) => (
    <li
      key={key}
      className={`has-dropdown ${
        item?.isActive ? "current-menu-ancestor" : ""
      }`}
    >
      <Link href={item?.path || "#"}>{item?.name}</Link>
      <ul className="sub-menu">
        {item?.submenu?.length
          ? item?.submenu?.map((group, gIdx) =>
              group?.items?.length ? (
                group?.items?.map((sub, sIdx) => (
                  <li
                    key={`${gIdx}-${sIdx}`}
                    className={sub?.isActive ? "current-menu-item" : ""}
                  >
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
      </ul>
    </li>
  );

  const renderItem = (item, key) => {
    if (item?.name === "Pages") return renderPagesMenu(item, key);
    if (item?.name === "Services") return renderServicesMenu(item, key);
    if (item?.submenu?.length) return renderGenericWithSubmenu(item, key);
    return (
      <li
        key={key}
        className={`${item?.isActive ? "current-menu-ancestor" : ""}`}
      >
        <Link href={item?.path || "#"}>{item?.name}</Link>
      </li>
    );
  };

  return (
    <div className="menu-area d-none d-lg-inline-flex align-items-center">
      <nav id="mobile-menu" className="mainmenu">
        <ul>{items.map((it, idx) => renderItem(it, idx))}</ul>
      </nav>
    </div>
  );
};

export default Navbar;
