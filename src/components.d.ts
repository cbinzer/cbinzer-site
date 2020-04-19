/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MarkdownHeading, SiteStructureItem, } from "./global/definitions";
export namespace Components {
    interface AboutMePage {
    }
    interface AnnouncementBar {
    }
    interface AppBurger {
        "toggleLeftSidebar": () => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface BlogComponent {
        "page"?: string;
    }
    interface CbAboutMeTeaser {
    }
    interface CbBlogList {
    }
    interface CbBlogPage {
    }
    interface CbHomePage {
    }
    interface CbImprintPage {
    }
    interface CbNotfoundPage {
    }
    interface CbPrivacyPage {
    }
    interface ContributorList {
        "contributors"?: string[];
    }
    interface CustomClock {
    }
    interface DemoCard {
        "SourceBufferList"?: string;
        "demoUrl"?: string;
        "description"?: string;
        "imgPath"?: string;
        "name"?: string;
        "sourceUrl"?: string;
    }
    interface HighlightCode {
    }
    interface InPageNavigation {
        "currentPageUrl": string;
        "pageLinks": MarkdownHeading[];
        "srcUrl": string;
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface PreFooter {
    }
    interface PwasPage {
    }
    interface ResourcesPage {
    }
    interface SiteHeader {
    }
    interface SiteMenu {
        "selectedParent"?: SiteStructureItem;
        "siteStructureList": SiteStructureItem[];
    }
    interface SiteTopBar {
    }
}
declare global {
    interface HTMLAboutMePageElement extends Components.AboutMePage, HTMLStencilElement {
    }
    var HTMLAboutMePageElement: {
        prototype: HTMLAboutMePageElement;
        new (): HTMLAboutMePageElement;
    };
    interface HTMLAnnouncementBarElement extends Components.AnnouncementBar, HTMLStencilElement {
    }
    var HTMLAnnouncementBarElement: {
        prototype: HTMLAnnouncementBarElement;
        new (): HTMLAnnouncementBarElement;
    };
    interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {
    }
    var HTMLAppBurgerElement: {
        prototype: HTMLAppBurgerElement;
        new (): HTMLAppBurgerElement;
    };
    interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {
    }
    var HTMLAppIconElement: {
        prototype: HTMLAppIconElement;
        new (): HTMLAppIconElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBlogComponentElement extends Components.BlogComponent, HTMLStencilElement {
    }
    var HTMLBlogComponentElement: {
        prototype: HTMLBlogComponentElement;
        new (): HTMLBlogComponentElement;
    };
    interface HTMLCbAboutMeTeaserElement extends Components.CbAboutMeTeaser, HTMLStencilElement {
    }
    var HTMLCbAboutMeTeaserElement: {
        prototype: HTMLCbAboutMeTeaserElement;
        new (): HTMLCbAboutMeTeaserElement;
    };
    interface HTMLCbBlogListElement extends Components.CbBlogList, HTMLStencilElement {
    }
    var HTMLCbBlogListElement: {
        prototype: HTMLCbBlogListElement;
        new (): HTMLCbBlogListElement;
    };
    interface HTMLCbBlogPageElement extends Components.CbBlogPage, HTMLStencilElement {
    }
    var HTMLCbBlogPageElement: {
        prototype: HTMLCbBlogPageElement;
        new (): HTMLCbBlogPageElement;
    };
    interface HTMLCbHomePageElement extends Components.CbHomePage, HTMLStencilElement {
    }
    var HTMLCbHomePageElement: {
        prototype: HTMLCbHomePageElement;
        new (): HTMLCbHomePageElement;
    };
    interface HTMLCbImprintPageElement extends Components.CbImprintPage, HTMLStencilElement {
    }
    var HTMLCbImprintPageElement: {
        prototype: HTMLCbImprintPageElement;
        new (): HTMLCbImprintPageElement;
    };
    interface HTMLCbNotfoundPageElement extends Components.CbNotfoundPage, HTMLStencilElement {
    }
    var HTMLCbNotfoundPageElement: {
        prototype: HTMLCbNotfoundPageElement;
        new (): HTMLCbNotfoundPageElement;
    };
    interface HTMLCbPrivacyPageElement extends Components.CbPrivacyPage, HTMLStencilElement {
    }
    var HTMLCbPrivacyPageElement: {
        prototype: HTMLCbPrivacyPageElement;
        new (): HTMLCbPrivacyPageElement;
    };
    interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {
    }
    var HTMLContributorListElement: {
        prototype: HTMLContributorListElement;
        new (): HTMLContributorListElement;
    };
    interface HTMLCustomClockElement extends Components.CustomClock, HTMLStencilElement {
    }
    var HTMLCustomClockElement: {
        prototype: HTMLCustomClockElement;
        new (): HTMLCustomClockElement;
    };
    interface HTMLDemoCardElement extends Components.DemoCard, HTMLStencilElement {
    }
    var HTMLDemoCardElement: {
        prototype: HTMLDemoCardElement;
        new (): HTMLDemoCardElement;
    };
    interface HTMLHighlightCodeElement extends Components.HighlightCode, HTMLStencilElement {
    }
    var HTMLHighlightCodeElement: {
        prototype: HTMLHighlightCodeElement;
        new (): HTMLHighlightCodeElement;
    };
    interface HTMLInPageNavigationElement extends Components.InPageNavigation, HTMLStencilElement {
    }
    var HTMLInPageNavigationElement: {
        prototype: HTMLInPageNavigationElement;
        new (): HTMLInPageNavigationElement;
    };
    interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {
    }
    var HTMLLowerContentNavElement: {
        prototype: HTMLLowerContentNavElement;
        new (): HTMLLowerContentNavElement;
    };
    interface HTMLPreFooterElement extends Components.PreFooter, HTMLStencilElement {
    }
    var HTMLPreFooterElement: {
        prototype: HTMLPreFooterElement;
        new (): HTMLPreFooterElement;
    };
    interface HTMLPwasPageElement extends Components.PwasPage, HTMLStencilElement {
    }
    var HTMLPwasPageElement: {
        prototype: HTMLPwasPageElement;
        new (): HTMLPwasPageElement;
    };
    interface HTMLResourcesPageElement extends Components.ResourcesPage, HTMLStencilElement {
    }
    var HTMLResourcesPageElement: {
        prototype: HTMLResourcesPageElement;
        new (): HTMLResourcesPageElement;
    };
    interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {
    }
    var HTMLSiteHeaderElement: {
        prototype: HTMLSiteHeaderElement;
        new (): HTMLSiteHeaderElement;
    };
    interface HTMLSiteMenuElement extends Components.SiteMenu, HTMLStencilElement {
    }
    var HTMLSiteMenuElement: {
        prototype: HTMLSiteMenuElement;
        new (): HTMLSiteMenuElement;
    };
    interface HTMLSiteTopBarElement extends Components.SiteTopBar, HTMLStencilElement {
    }
    var HTMLSiteTopBarElement: {
        prototype: HTMLSiteTopBarElement;
        new (): HTMLSiteTopBarElement;
    };
    interface HTMLElementTagNameMap {
        "about-me-page": HTMLAboutMePageElement;
        "announcement-bar": HTMLAnnouncementBarElement;
        "app-burger": HTMLAppBurgerElement;
        "app-icon": HTMLAppIconElement;
        "app-root": HTMLAppRootElement;
        "blog-component": HTMLBlogComponentElement;
        "cb-about-me-teaser": HTMLCbAboutMeTeaserElement;
        "cb-blog-list": HTMLCbBlogListElement;
        "cb-blog-page": HTMLCbBlogPageElement;
        "cb-home-page": HTMLCbHomePageElement;
        "cb-imprint-page": HTMLCbImprintPageElement;
        "cb-notfound-page": HTMLCbNotfoundPageElement;
        "cb-privacy-page": HTMLCbPrivacyPageElement;
        "contributor-list": HTMLContributorListElement;
        "custom-clock": HTMLCustomClockElement;
        "demo-card": HTMLDemoCardElement;
        "highlight-code": HTMLHighlightCodeElement;
        "in-page-navigation": HTMLInPageNavigationElement;
        "lower-content-nav": HTMLLowerContentNavElement;
        "pre-footer": HTMLPreFooterElement;
        "pwas-page": HTMLPwasPageElement;
        "resources-page": HTMLResourcesPageElement;
        "site-header": HTMLSiteHeaderElement;
        "site-menu": HTMLSiteMenuElement;
        "site-top-bar": HTMLSiteTopBarElement;
    }
}
declare namespace LocalJSX {
    interface AboutMePage {
    }
    interface AnnouncementBar {
        "onToggleModal"?: (event: CustomEvent<any>) => void;
    }
    interface AppBurger {
        "toggleLeftSidebar"?: () => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface BlogComponent {
        "page"?: string;
    }
    interface CbAboutMeTeaser {
    }
    interface CbBlogList {
    }
    interface CbBlogPage {
    }
    interface CbHomePage {
    }
    interface CbImprintPage {
    }
    interface CbNotfoundPage {
    }
    interface CbPrivacyPage {
    }
    interface ContributorList {
        "contributors"?: string[];
    }
    interface CustomClock {
    }
    interface DemoCard {
        "SourceBufferList"?: string;
        "demoUrl"?: string;
        "description"?: string;
        "imgPath"?: string;
        "name"?: string;
        "sourceUrl"?: string;
    }
    interface HighlightCode {
    }
    interface InPageNavigation {
        "currentPageUrl"?: string;
        "pageLinks"?: MarkdownHeading[];
        "srcUrl"?: string;
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface PreFooter {
    }
    interface PwasPage {
    }
    interface ResourcesPage {
    }
    interface SiteHeader {
    }
    interface SiteMenu {
        "selectedParent"?: SiteStructureItem;
        "siteStructureList"?: SiteStructureItem[];
    }
    interface SiteTopBar {
    }
    interface IntrinsicElements {
        "about-me-page": AboutMePage;
        "announcement-bar": AnnouncementBar;
        "app-burger": AppBurger;
        "app-icon": AppIcon;
        "app-root": AppRoot;
        "blog-component": BlogComponent;
        "cb-about-me-teaser": CbAboutMeTeaser;
        "cb-blog-list": CbBlogList;
        "cb-blog-page": CbBlogPage;
        "cb-home-page": CbHomePage;
        "cb-imprint-page": CbImprintPage;
        "cb-notfound-page": CbNotfoundPage;
        "cb-privacy-page": CbPrivacyPage;
        "contributor-list": ContributorList;
        "custom-clock": CustomClock;
        "demo-card": DemoCard;
        "highlight-code": HighlightCode;
        "in-page-navigation": InPageNavigation;
        "lower-content-nav": LowerContentNav;
        "pre-footer": PreFooter;
        "pwas-page": PwasPage;
        "resources-page": ResourcesPage;
        "site-header": SiteHeader;
        "site-menu": SiteMenu;
        "site-top-bar": SiteTopBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "about-me-page": LocalJSX.AboutMePage & JSXBase.HTMLAttributes<HTMLAboutMePageElement>;
            "announcement-bar": LocalJSX.AnnouncementBar & JSXBase.HTMLAttributes<HTMLAnnouncementBarElement>;
            "app-burger": LocalJSX.AppBurger & JSXBase.HTMLAttributes<HTMLAppBurgerElement>;
            "app-icon": LocalJSX.AppIcon & JSXBase.HTMLAttributes<HTMLAppIconElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "blog-component": LocalJSX.BlogComponent & JSXBase.HTMLAttributes<HTMLBlogComponentElement>;
            "cb-about-me-teaser": LocalJSX.CbAboutMeTeaser & JSXBase.HTMLAttributes<HTMLCbAboutMeTeaserElement>;
            "cb-blog-list": LocalJSX.CbBlogList & JSXBase.HTMLAttributes<HTMLCbBlogListElement>;
            "cb-blog-page": LocalJSX.CbBlogPage & JSXBase.HTMLAttributes<HTMLCbBlogPageElement>;
            "cb-home-page": LocalJSX.CbHomePage & JSXBase.HTMLAttributes<HTMLCbHomePageElement>;
            "cb-imprint-page": LocalJSX.CbImprintPage & JSXBase.HTMLAttributes<HTMLCbImprintPageElement>;
            "cb-notfound-page": LocalJSX.CbNotfoundPage & JSXBase.HTMLAttributes<HTMLCbNotfoundPageElement>;
            "cb-privacy-page": LocalJSX.CbPrivacyPage & JSXBase.HTMLAttributes<HTMLCbPrivacyPageElement>;
            "contributor-list": LocalJSX.ContributorList & JSXBase.HTMLAttributes<HTMLContributorListElement>;
            "custom-clock": LocalJSX.CustomClock & JSXBase.HTMLAttributes<HTMLCustomClockElement>;
            "demo-card": LocalJSX.DemoCard & JSXBase.HTMLAttributes<HTMLDemoCardElement>;
            "highlight-code": LocalJSX.HighlightCode & JSXBase.HTMLAttributes<HTMLHighlightCodeElement>;
            "in-page-navigation": LocalJSX.InPageNavigation & JSXBase.HTMLAttributes<HTMLInPageNavigationElement>;
            "lower-content-nav": LocalJSX.LowerContentNav & JSXBase.HTMLAttributes<HTMLLowerContentNavElement>;
            "pre-footer": LocalJSX.PreFooter & JSXBase.HTMLAttributes<HTMLPreFooterElement>;
            "pwas-page": LocalJSX.PwasPage & JSXBase.HTMLAttributes<HTMLPwasPageElement>;
            "resources-page": LocalJSX.ResourcesPage & JSXBase.HTMLAttributes<HTMLResourcesPageElement>;
            "site-header": LocalJSX.SiteHeader & JSXBase.HTMLAttributes<HTMLSiteHeaderElement>;
            "site-menu": LocalJSX.SiteMenu & JSXBase.HTMLAttributes<HTMLSiteMenuElement>;
            "site-top-bar": LocalJSX.SiteTopBar & JSXBase.HTMLAttributes<HTMLSiteTopBarElement>;
        }
    }
}
