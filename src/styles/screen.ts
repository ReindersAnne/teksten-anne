// import { injectGlobal } from 'emotion';
// import { colors } from './global';
// import { lighten, setLightness, darken } from 'polished';

// // tslint:disable-next-line:no-unused-expression
// injectGlobal`
//   body {
//     background: #f4f8fb;
//   }

//   .img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     background-position: center center;
//     background-size: cover;
//     border-radius: 100%;
//   }

//   .hidden {
//     visibility: hidden;
//     position: absolute;
//     text-indent: -9999px;
//   }

//   .site-wrapper {
//     display: flex;
//     flex-direction: column;
//     min-height: 100vh;
//   }

//   .site-main {
//     z-index: 100;
//     flex-grow: 1;
//   }

//   .outer {
//     position: relative;
//     padding: 0 4vw;
//   }

//   .inner {
//     margin: 0 auto;
//     max-width: 1040px;
//     width: 100%;
//   }

//   @media (min-width: 900px) {
//     .home-template .post-feed,
//     .tag-template .post-feed,
//     .author-template .post-feed {
//         margin-top: -70px;
//         padding-top: 0;
//     }
//     .home-template .site-nav {
//         position: relative;
//         top: -70px;
//     }
//   }

//   .site-header {
//     position: relative;
//     padding-top: 12px;
//     padding-bottom: 12px;
//     color: #fff;
//     background: ${setLightness(0.05, colors.darkgrey)} no-repeat center center;
//     background-size: cover;
//   }

//   .site-header:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 10;
//     display: block;
//     background: rgba(0,0,0,0.18);
//   }

//   .site-header:after {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: auto;
//     left: 0;
//     z-index: 10;
//     display: block;
//     height: 80px;
//     background: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0));
//   }

//   .site-header.no-cover:before,
//   .site-header.no-cover:after {
//     display: none;
//   }

//   .site-header-content {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 10vw 4vw;
//     min-height: 200px;
//     max-height: 450px;
//     text-align: center;
//   }

//   .site-title {
//     z-index: 10;
//     margin: 0;
//     padding: 0;
//     font-size: 3.8rem;
//     font-weight: 700;
//   }

//   .site-logo {
//     max-height: 45px;
//   }

//   .site-description {
//     z-index: 10;
//     margin: 0;
//     padding: 5px 0;
//     font-size: 2.2rem;
//     font-weight: 300;
//     letter-spacing: 0.5px;
//     opacity: 0.8;
//   }

//   @media (max-width: 500px) {
//     .site-title {
//         font-size: 3rem;
//     }
//     .site-description {
//         font-size: 1.8rem;
//     }
//   }

//   .site-nav {
//     position: relative;
//     z-index: 300;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//     overflow-y: hidden;
//     height: 40px;
//     font-size: 1.2rem;
//   }

//   .site-nav-left {
//     display: flex;
//     align-items: center;
//     overflow-x: auto;
//     overflow-y: hidden;
//     -webkit-overflow-scrolling: touch;
//     margin-right: 10px;
//     padding-bottom: 80px;
//     letter-spacing: 0.4px;
//     white-space: nowrap;

//     -ms-overflow-scrolling: touch;
//   }

//   .site-nav-logo {
//     flex-shrink: 0;
//     display: block;
//     margin-right: 24px;
//     padding: 11px 0;
//     color: #fff;
//     font-size: 1.7rem;
//     line-height: 1em;
//     font-weight: bold;
//     letter-spacing: -0.5px;
//   }

//   .site-nav-logo:hover {
//     text-decoration: none;
//   }

//   .site-nav-logo img {
//     display: block;
//     width: auto;
//     height: 21px;
//   }

//   .nav {
//     display: flex;
//     margin: 0 0 0 -12px;
//     padding: 0;
//     list-style: none;
//   }

//   .nav li {
//     display: block;
//     margin: 0;
//     padding: 0;
//     text-transform: uppercase;
//   }

//   .nav li a {
//     display: block;
//     margin: 0;
//     padding: 10px 12px;
//     color: #fff;
//     opacity: 0.8;
//   }

//   .nav li a:hover {
//     text-decoration: none;
//     opacity: 1;
//   }

//   .site-nav-right {
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     height: 40px;
//   }

//   .social-links {
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//   }

//   .social-links a:last-of-type {
//     padding-right: 20px;
//   }

//   .social-link {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0;
//     padding: 10px;
//     color: #fff;
//     opacity: 0.8;
//   }

//   .social-link:hover {
//     opacity: 1;
//   }

//   .social-link svg {
//     height: 1.8rem;
//     fill: #fff;
//   }

//   .social-link-fb svg {
//     height: 1.5rem;
//   }

//   .social-link-wb svg {
//     height: 1.6rem;
//   }

//   .social-link-wb svg path {
//     stroke: #fff;
//   }

//   .social-link-rss svg {
//     height: 1.9rem;
//   }

//   .subscribe-button {
//     display: block;
//     padding: 4px 10px;
//     border: #fff 1px solid;
//     color: #fff;
//     font-size: 1.2rem;
//     line-height: 1em;
//     border-radius: 10px;
//     opacity: 0.8;
//   }

//   .subscribe-button:hover {
//     text-decoration: none;
//     opacity: 1;
//   }

//   .rss-button {
//     opacity: 0.8;
//   }

//   .rss-button:hover {
//     opacity: 1;
//   }

//   .rss-button svg {
//     margin-bottom: 1px;
//     height: 2.1rem;
//     fill: #fff;
//   }

//   @media (max-width: 700px) {
//     .site-header {
//         padding-right: 0;
//         padding-left: 0;
//     }
//     .site-nav-left {
//         margin-right: 0;
//         padding-left: 4vw;
//     }
//     .site-nav-right {
//         display: none;
//     }
//   }

//   .post-feed {
//     position: relative;
//     display: flex;
//     flex-wrap: wrap;
//     margin: 0 -20px;
//     padding: 40px 0 0 0;
//   }

//   .post-card {
//     flex: 1 1 300px;
//     display: flex;
//     flex-direction: column;
//     overflow: hidden;
//     margin: 0 20px 40px;
//     min-height: 300px;
//     background: #fff center center;
//     background-size: cover;
//     border-radius: 5px;
//     box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
//     transition: all 0.5s ease;
//   }

//   .post-card:hover {
//     box-shadow: rgba(39,44,49,0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
//     transition: all 0.4s ease;
//     transform: translate3D(0, -1px, 0) scale(1.02);
//   }

//   .post-card-image-link {
//     position: relative;
//     display: block;
//     overflow: hidden;
//     border-radius: 5px 5px 0 0;
//   }

//   .post-card-image {
//     width: auto;
//     height: 200px;
//     background: ${colors.lightgrey} no-repeat center center;
//     background-size: cover;
//   }

//   .post-card-content-link {
//     position: relative;
//     flex-grow: 1;
//     display: block;
//     padding: 25px 25px 0;
//     color: ${colors.darkgrey};
//   }

//   .post-card-content-link:hover {
//     text-decoration: none;
//   }

//   .post-card-tags {
//     display: block;
//     margin-bottom: 4px;
//     color: ${colors.midgrey};
//     font-size: 1.2rem;
//     line-height: 1.15em;
//     font-weight: 500;
//     letter-spacing: 0.5px;
//     text-transform: uppercase;
//   }

//   .post-card-title {
//     margin-top: 0;
//   }

//   .post-card-content {
//     flex-grow: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }

//   .post-card-excerpt {
//     font-family: Georgia, serif;
//   }

//   .post-card-meta {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-end;
//     padding: 0 25px 25px;
//   }

//   .author-profile-image,
//   .avatar-wrapper {
//     display: block;
//     width: 100%;
//     height: 100%;
//     background: color(${colors.lightgrey} l(+10%));
//     border-radius: 100%;

//     object-fit: cover;
//   }

//   .post-card-meta .profile-image-wrapper,
//   .post-card-meta .avatar-wrapper {
//     position: relative;
//   }

//   .author-list {
//     display: flex;
//     flex-wrap: wrap-reverse;
//     margin: 0;
//     padding: 0;
//     list-style: none;
//   }

//   .author-list-item {
//     position: relative;
//     flex-shrink: 0;
//     margin: 0;
//     padding: 0;
//   }

//   .author-list-item:nth-child(1) {
//     z-index: 10;
//   }
//   .author-list-item:nth-child(2) {
//     z-index: 9;
//   }
//   .author-list-item:nth-child(3) {
//     z-index: 8;
//   }
//   .author-list-item:nth-child(4) {
//     z-index: 7;
//   }
//   .author-list-item:nth-child(5) {
//     z-index: 6;
//   }
//   .author-list-item:nth-child(6) {
//     z-index: 5;
//   }
//   .author-list-item:nth-child(7) {
//     z-index: 4;
//   }
//   .author-list-item:nth-child(8) {
//     z-index: 3;
//   }
//   .author-list-item:nth-child(9) {
//     z-index: 2;
//   }
//   .author-list-item:nth-child(10) {
//     z-index: 1;
//   }

//   .static-avatar {
//     display: block;
//     overflow: hidden;
//     margin: 0 -5px;
//     width: 34px;
//     height: 34px;
//     border: #fff 2px solid;
//     border-radius: 100%;
//   }

//   .moving-avatar {
//     display: block;
//     overflow: hidden;
//     margin: 0 -6px;
//     width: 56px;
//     height: 56px;
//     border: #fff 2px solid;
//     border-radius: 100%;
//     transition: all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99) 0.7s;
//   }

//   @media (min-width: 800px) {
//     .author-list:hover .moving-avatar {
//         margin: 0;
//         transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
//     }
//   }

//   .author-name-tooltip {
//     position: absolute;
//     bottom: 105%;
//     z-index: 999;
//     display: block;
//     padding: 2px 8px;
//     color: white;
//     font-size: 1.2rem;
//     letter-spacing: 0.2px;
//     white-space: nowrap;
//     background: ${colors.darkgrey};
//     border-radius: 3px;
//     box-shadow: rgba(39,44,49,0.08) 0 12px 26px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
//     opacity: 0;
//     transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
//     transform: translateY(6px);
//     pointer-events: none;
//   }

//   .author-list-item:hover .author-name-tooltip {
//     opacity: 1.0;
//     transform: translateY(0px);
//   }

//   @media (max-width: 650px) {
//     .author-name-tooltip {
//         display: none;
//     }
//   }

//   .reading-time {
//     flex-shrink: 0;
//     margin-left: 20px;
//     color: ${colors.midgrey};
//     font-size: 1.2rem;
//     line-height: 33px;
//     font-weight: 500;
//     letter-spacing: 0.5px;
//     text-transform: uppercase;
//   }

//   @media (min-width: 795px) {
//     .home-template .post-feed .post-card:nth-child(6n+1):not(.no-image) {
//         flex: 1 1 100%;
//         flex-direction: row;
//     }

//     .home-template .post-feed .post-card:nth-child(6n+1):not(.no-image) .post-card-image-link {
//         position: relative;
//         flex: 1 1 auto;
//         border-radius: 5px 0 0 5px;
//     }

//     .home-template .post-feed .post-card:nth-child(6n+1):not(.no-image) .post-card-image {
//         position: absolute;
//         width: 100%;
//         height: 100%;
//     }

//     .home-template .post-feed .post-card:nth-child(6n+1):not(.no-image) .post-card-content {
//         flex: 0 1 357px;
//     }

//     .home-template .post-feed .post-card:nth-child(6n+1):not(.no-image) h2 {
//         font-size: 2.6rem;
//     }

//     .home-template .post-feed .post-card:nth-child(6n+1):not(.no-image) p {
//         font-size: 1.8rem;
//         line-height: 1.55em;
//     }

//     .home-template .post-feed .post-card:nth-child(6n+1):not(.no-image) .post-card-content-link {
//         padding: 30px 40px 0;
//     }

//     .home-template .post-feed .post-card:nth-child(6n+1):not(.no-image) .post-card-meta {
//         padding: 0 40px 30px;
//     }
//   }

//   .home-template .site-header:after {
//     display: none;
//   }


//   @media (max-width: 650px) {
//     .post-feed {
//         padding-top: 5vw;
//     }
//     .post-card {
//         margin: 0 20px 5vw;
//     }
//   }



//   .post-template .site-main,
//   .page-template .site-main {
//     padding-bottom: 4vw;
//     background: #fff;
//   }

//   .post-full {
//     position: relative;
//     z-index: 50;
//   }

//   .post-full-header {
//     margin: 0 auto;
//     padding: 6vw 3vw 3vw;
//     max-width: 1040px;
//     text-align: center;
//   }
//   @media (max-width: 500px) {
//     .post-full-header {
//         padding: 14vw 3vw 10vw;
//     }
//   }

//   .post-full-meta {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: ${colors.midgrey};
//     font-size: 1.4rem;
//     font-weight: 600;
//     text-transform: uppercase;
//   }

//   .post-full-meta-date {
//     color: ${colors.blue};
//   }

//   .post-full-title {
//     margin: 0;
//     color: ${lighten('-5%', colors.darkgrey)};
//   }

//   .date-divider {
//     display: inline-block;
//     margin: 0 6px 1px;
//   }

//   .post-full-image {
//     margin: 0 -10vw -165px;
//     height: 800px;
//     background: ${colors.lightgrey} center center;
//     background-size: cover;
//     border-radius: 5px;
//   }

//   @media (max-width: 1170px) {
//     .post-full-image {
//         margin: 0 -4vw -100px;
//         height: 600px;
//         border-radius: 0;
//     }
//   }

//   @media (max-width: 800px) {
//     .post-full-image {
//         height: 400px;
//     }
//   }

//   .post-full-content {
//     position: relative;
//     margin: 0 auto;
//     padding: 70px 100px 0;
//     min-height: 230px;
//     font-family: Georgia, serif;
//     font-size: 2.2rem;
//     line-height: 1.6em;
//     background: #fff;
//   }

//   @media (max-width: 1170px) {
//     .post-full-content {
//         padding: 5vw 7vw 0;
//     }
//   }
//   @media (max-width: 800px) {
//     .post-full-content {
//         font-size: 1.9rem;
//     }
//   }

//   .post-full-content:before {
//     content: "";
//     position: absolute;
//     top: 15px;
//     left: -5px;
//     z-index: -1;
//     display: block;
//     width: 20px;
//     height: 200px;
//     background: rgba(39,44,49,0.15);
//     filter: blur(5px);
//     transform: rotate(-5deg);
//   }

//   .post-full-content:after {
//     content: "";
//     position: absolute;
//     top: 15px;
//     right: -5px;
//     z-index: -1;
//     display: block;
//     width: 20px;
//     height: 200px;
//     background: rgba(39,44,49,0.15);
//     filter: blur(5px);
//     transform: rotate(5deg);
//   }

//   .no-image .post-full-content {
//     padding-top: 0;
//   }

//   .no-image .post-full-content:before,
//   .no-image .post-full-content:after {
//     display: none;
//   }

//   .post-full-content h1,
//   .post-full-content h2,
//   .post-full-content h3,
//   .post-full-content h4,
//   .post-full-content h5,
//   .post-full-content h6,
//   .post-full-content p,
//   .post-full-content ul,
//   .post-full-content ol,
//   .post-full-content dl,
//   .post-full-content pre,
//   .post-full-content blockquote,
//   .post-full-comments,
//   .footnotes {
//     min-width: 100%;
//   }

//   .post-full-content li {
//     word-break: break-word;
//   }

//   .post-full-content li p {
//     margin: 0;
//   }

//   .post-full-content a {
//     color: #000;
//     word-break: break-word;
//     box-shadow: ${colors.blue} 0 -1px 0 inset;
//   }

//   .post-full-content a:hover {
//     color: ${colors.blue};
//     text-decoration: none;
//   }

//   .post-full-content strong,
//   .post-full-content em {
//     color: ${lighten('-5%', colors.darkgrey)};
//   }

//   .post-full-content small {
//     display: inline-block;
//     line-height: 1.6em;
//   }

//   .post-full-content li:first-child {
//     margin-top: 0;
//   }

//   .post-full-content img,
//   .post-full-content video {
//     display: block;
//     margin: 1.5em auto;
//     max-width: 1040px;
//     height: auto;
//   }
//   @media (max-width: 1040px) {
//     .post-full-content img,
//     .post-full-content video {
//         width: 100%;
//     }
//   }


//   .post-full-content img[src$="#full"] {
//     max-width: none;
//     width: 100vw;
//   }


//   .post-full-content img + br + small {
//     display: block;
//     margin-top: -3em;
//     margin-bottom: 1.5em;
//     text-align: center;
//   }


//   .post-full-content iframe {
//     margin: 0 auto !important;
//   }

//   .post-full-content blockquote {
//     margin: 0 0 1.5em;
//     padding: 0 1.5em;
//     border-left: #3eb0ef 3px solid;
//   }

//   .post-full-content blockquote p {
//     margin: 0 0 1em 0;
//     color: inherit;
//     font-size: inherit;
//     line-height: inherit;
//     font-style: italic;
//   }

//   .post-full-content blockquote p:last-child {
//     margin-bottom: 0;
//   }

//   .post-full-content code {
//     padding: 0 5px 2px;
//     font-size: 0.8em;
//     line-height: 1em;
//     font-weight: 400!important;
//     background: ${colors.whitegrey};
//     border-radius: 3px;
//   }

//   .post-full-content pre {
//     overflow-x: auto;
//     margin: 1.5em 0 3em;
//     padding: 20px;
//     max-width: 100%;
//     border: color(${colors.darkgrey} l(-10%)) 1px solid;
//     color: ${colors.whitegrey};
//     font-size: 1.4rem;
//     line-height: 1.5em;
//     background: color(${colors.darkgrey} l(-3%));
//     border-radius: 5px;
//   }

//   .post-full-content pre code {
//     padding: 0;
//     font-size: inherit;
//     line-height: inherit;
//     background: transparent;
//   }

//   .post-full-content pre code * {
//     color: inherit;
//   }

//   .post-full-content .fluid-width-video-wrapper {
//     margin: 1.5em 0 3em;
//   }

//   .post-full-content hr {
//     margin: 4vw 0;
//   }

//   .post-full-content hr:after {
//     content: "";
//     position: absolute;
//     top: -15px;
//     left: 50%;
//     display: block;
//     margin-left: -10px;
//     width: 1px;
//     height: 30px;
//     background: color(${colors.lightgrey} l(+10%));
//     box-shadow: #fff 0 0 0 5px;
//     transform: rotate(45deg);
//   }

//   .post-full-content h1,
//   .post-full-content h2,
//   .post-full-content h3,
//   .post-full-content h4,
//   .post-full-content h5,
//   .post-full-content h6 {
//     color: color(${colors.darkgrey} l(-5%));
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   }

//   .post-full-content h1 {
//     margin: 0.5em 0 0.2em 0;
//     font-size: 4.6rem;
//     font-weight: 700;
//   }
//   @media (max-width: 500px) {
//     .post-full-content h1 {
//         font-size: 2.8rem;
//     }
//   }

//   .post-full-content h2 {
//     margin: 0.5em 0 0.2em 0;
//     font-size: 3.6rem;
//     font-weight: 700;
//   }
//   @media (max-width: 500px) {
//     .post-full-content h2 {
//         font-size: 2.6rem;
//     }
//   }

//   .post-full-content h3 {
//     margin: 0.5em 0 0.2em 0;
//     font-size: 2.8rem;
//     font-weight: 700;
//   }
//   @media (max-width: 500px) {
//     .post-full-content h3 {
//         font-size: 2.2rem;
//     }
//   }

//   .post-full-content h4 {
//     margin: 0.5em 0 0.2em 0;
//     font-size: 2.8rem;
//     font-weight: 700;
//   }
//   @media (max-width: 500px) {
//     .post-full-content h4 {
//         font-size: 2.2rem;
//     }
//   }

//   .post-full-content h5 {
//     display: block;
//     margin: 0.5em 0;
//     padding: 1em 0 1.5em;
//     border: 0;
//     color: ${colors.blue};
//     font-family: Georgia,serif;
//     font-size: 3.2rem;
//     line-height: 1.35em;
//     text-align: center;
//   }
//   @media (min-width: 1180px) {
//     .post-full-content h5 {
//         max-width: 1060px;
//         width: 100vw;
//     }
//   }
//   @media (max-width: 500px) {
//     .post-full-content h5 {
//         padding: 0 0 0.5em;
//         font-size: 2.2rem;
//     }
//   }

//   .post-full-content h6 {
//     margin: 0.5em 0 0.2em 0;
//     font-size: 2.3rem;
//     font-weight: 700;
//   }
//   @media (max-width: 500px) {
//     .post-full-content h6 {
//         font-size: 2rem;
//     }
//   }

//   .footnotes-sep {
//     margin-bottom: 30px;
//   }

//   .footnotes {
//     font-size: 1.5rem;
//   }

//   .footnotes p {
//     margin: 0;
//   }

//   .footnote-backref {
//     color: ${colors.blue} !important;
//     font-size: 1.2rem;
//     font-weight: bold;
//     text-decoration: none !important;
//     box-shadow: none !important;
//   }

//   @media (max-width: 500px) {
//     .post-full-meta {
//         font-size: 1.2rem;
//         line-height: 1.3em;
//     }
//     .post-full-title {
//         font-size: 2.9rem;
//     }
//     .post-full-image {
//         margin-bottom: 4vw;
//         height: 350px;
//     }
//     .post-full-content {
//         padding: 0;
//     }
//     .post-full-content:before,
//     .post-full-content:after {
//         display: none;
//     }
//   }

//   .post-full-content table {
//     display: inline-block;
//     overflow-x: auto;
//     margin: 0.5em 0 2.5em;
//     max-width: 100%;
//     width: auto;
//     border-spacing: 0;
//     border-collapse: collapse;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//     font-size: 1.6rem;
//     white-space: nowrap;
//     vertical-align: top;
//   }

//   .post-full-content table {
//     -webkit-overflow-scrolling: touch;
//     background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0 center, radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
//     background-attachment: scroll, scroll;
//     background-size: 10px 100%, 10px 100%;
//     background-repeat: no-repeat;
//   }

//   .post-full-content table td:first-child {
//     background-image: linear-gradient(to right, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
//     background-size: 20px 100%;
//     background-repeat: no-repeat;
//   }

//   .post-full-content table td:last-child {
//     background-image: linear-gradient(to left, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
//     background-position: 100% 0;
//     background-size: 20px 100%;
//     background-repeat: no-repeat;
//   }

//   .post-full-content table th {
//     color: ${colors.darkgrey};
//     font-size: 1.2rem;
//     font-weight: 700;
//     letter-spacing: 0.2px;
//     text-align: left;
//     text-transform: uppercase;
//     background-color: color(${colors.whitegrey} l(+4%));
//   }

//   .post-full-content table th,
//   .post-full-content table td {
//     padding: 6px 12px;
//     border: color(${colors.whitegrey} l(-1%) s(-5%)) 1px solid;
//   }


//   .subscribe-form {
//     margin: 1.5em 0;
//     padding: 6.5vw 7vw 7vw;
//     border: color(${colors.whitegrey} l(+2%)) 1px solid;
//     text-align: center;
//     background: color(${colors.whitegrey} l(+4%));
//     border-radius: 7px;
//   }

//   .subscribe-form-title {
//     margin: 0 0 3px 0;
//     padding: 0;
//     color: ${colors.darkgrey};
//     font-size: 3.5rem;
//     line-height: 1;
//     font-weight: 700;
//   }

//   .subscribe-form p {
//     margin-bottom: 1em;
//     color: ${colors.midgrey};
//     font-size: 2.2rem;
//     line-height: 1.55em;
//     letter-spacing: 0.2px;
//   }

//   .subscribe-form form {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0 auto;
//     max-width: 420px;
//   }

//   .subscribe-form .form-group {
//     flex-grow: 1;
//   }

//   .subscribe-email {
//     display: block;
//     padding: 10px;
//     width: 100%;
//     border: color(${colors.lightgrey} l(+7%)) 1px solid;
//     color: ${colors.midgrey};
//     font-size: 1.8rem;
//     line-height: 1em;
//     font-weight: normal;
//     user-select: text;
//     border-radius: 5px;
//     transition: border-color 0.15s linear;

//     -webkit-appearance: none;
//   }

//   .subscribe-email:focus {
//     outline: 0;
//     border-color: color(${colors.lightgrey} l(-2%));
//   }

//   .subscribe-form button {
//     display: inline-block;
//     margin: 0 0 0 10px;
//     padding: 0 20px;
//     height: 41px;
//     outline: none;
//     color: #fff;
//     font-size: 1.5rem;
//     line-height: 37px;
//     font-weight: 400;
//     text-align: center;
//     text-shadow: 0 -1px 0 rgba(0,0,0,0.1);
//     background: linear-gradient(
//     color(${colors.blue} whiteness(+7%)),
//     color(${colors.blue} lightness(-7%) saturation(-10%)) 60%,
//     color(${colors.blue} lightness(-7%) saturation(-10%)) 90%,
//     color(${colors.blue} lightness(-4%) saturation(-10%))
//     );
//     border-radius: 5px;
//     box-shadow: 0 0 0 1px inset rgba(0,0,0,0.14);

//     -webkit-font-smoothing: subpixel-antialiased;
//   }

//   .subscribe-form button:active,
//   .subscribe-form button:focus {
//     background: color(${colors.blue} lightness(-9%) saturation(-10%));
//   }

//   @media (max-width: 650px) {
//     .subscribe-form-title {
//         font-size: 2.4rem;
//     }
//     .subscribe-form p {
//         font-size: 1.6rem;
//     }
//   }

//   @media (max-width: 500px) {
//     .subscribe-form form {
//         flex-direction: column;
//     }
//     .subscribe-form .form-group {
//         width: 100%;
//     }
//     .subscribe-form button {
//         margin: 10px 0 0 0;
//         width: 100%;
//     }
//   }


//   .post-full-footer {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin: 0 auto;
//     padding: 3vw 0 6vw 0;
//     max-width: 840px;
//   }


//   .author-card {
//     display: flex;
//   }

//   .author-card .author-profile-image,
//   .author-card .avatar-wrapper {
//     margin-right: 15px;
//     width: 60px;
//     height: 60px;
//   }

//   .author-card-name {
//     margin: 8px 0 2px 0;
//     padding: 0;
//     font-size: 2rem;
//   }

//   .author-card-name a {
//     color: ${colors.darkgrey};
//     font-weight: 700;
//   }

//   .author-card-name a:hover {
//     text-decoration: none;
//   }

//   .author-card-content p {
//     margin: 0;
//     color: ${colors.midgrey};
//     line-height: 1.3em;
//   }

//   .post-full-footer-right {
//     flex-shrink: 0;
//     margin-left: 20px;
//   }

//   .author-card-button {
//     display: block;
//     padding: 9px 16px;
//     border: color(${colors.midgrey} l(+20%)) 1px solid;
//     color: ${colors.midgrey};
//     font-size: 1.2rem;
//     line-height: 1;
//     font-weight: 500;
//     border-radius: 20px;
//     transition: all ease 0.2s;
//   }

//   .author-card-button:hover {
//     border-color: ${colors.blue};
//     color: ${colors.blue};
//     text-decoration: none;
//   }


//   .post-full-authors {
//     flex-grow: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top: 20px;
//     padding-top: 40px;
//     border-top: color(${colors.lightgrey} l(+10%)) 1px solid;
//   }

//   .post-full-authors-content {
//     margin-bottom: 20px;
//   }

//   .post-full-authors-content p {
//     margin-bottom: 0;
//     color: ${colors.midgrey};
//     font-size: 1.4rem;
//     letter-spacing: 0.2px;
//     text-align: center;
//     text-transform: uppercase;
//   }

//   .post-full-authors-content a {
//     display: inline-block;
//     color: color(${colors.darkgrey} l(+20%));
//     font-size: 1.4rem;
//     font-weight: 600;
//     text-transform: uppercase;
//   }

//   .post-full-footer .author-list {
//     justify-content: center;
//     padding: 10px 20px;
//   }

//   .author-card .author-profile-image,
//   .author-card .avatar-wrapper {
//     position: relative;
//     margin-right: 15px;
//   }

//   .author-list-item .author-card {
//     position: absolute;
//     bottom: 130%;
//     left: 50%;
//     z-index: 300;
//     display: block;
//     margin-left: -160px;
//     width: 320px;
//     font-size: 1.4rem;
//     letter-spacing: 0.2px;
//     background: white;
//     border-radius: 6px;
//     box-shadow: rgba(39,44,49,0.08) 0 12px 26px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
//     opacity: 0;
//     transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
//     transform: scale(0.98) translateY(15px);
//     pointer-events: none;
//   }

//   .author-list-item .author-card:before {
//     content: "";
//     position: absolute;
//     top: 100%;
//     left: 50%;
//     display: block;
//     margin-left: -12px;
//     width: 0;
//     height: 0;
//     border-top: 12px solid #fff;
//     border-right: 12px solid transparent;
//     border-left: 12px solid transparent;
//   }

//   .author-list-item .author-card.hovered {
//     opacity: 1.0;
//     transform: scale(1) translateY(0px);
//     pointer-events: auto;
//   }

//   .author-card .basic-info {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 30px 20px 20px 20px;
//     color: #fff;
//     background: ${colors.darkgrey};
//     border-radius: 6px 6px 0 0;
//   }

//   .author-card .basic-info h2 {
//     margin: 1em 0 0.5em;
//   }

//   .author-card .bio {
//     padding: 20px 20px 0;
//   }

//   @media (max-width: 650px) {
//     .author-list-item .author-card {
//         display: none;
//     }
//   }

//   .basic-info .author-profile-image {
//     margin: 0;
//     width: 88px;
//     height: 88px;
//     border: none;
//   }

//   .basic-info .avatar-wrapper {
//     position: relative;
//     margin: 0;
//     width: 88px;
//     height: 88px;
//     border: none;
//     background: rgba(229, 239, 245, 0.1);
//   }

//   .basic-info .avatar-wrapper svg {
//     margin: 0;
//     width: 88px;
//     height: 88px;
//     opacity: 0.15;
//   }


//   .post-full-comments {
//     margin: 0 auto;
//     max-width: 840px;
//   }


//   .read-next-feed {
//     display: flex;
//     flex-wrap: wrap;
//     margin: 0 -20px;
//     padding: 40px 0 0 0;
//   }

//   .read-next-card {
//     position: relative;
//     flex: 1 1 300px;
//     display: flex;
//     flex-direction: column;
//     overflow: hidden;
//     margin: 0 20px 40px;
//     padding: 25px;
//     color: #fff;
//     background: ${colors.darkgrey} center center;
//     background-size: cover;
//     border-radius: 5px;
//     box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
//   }

//   .read-next-card:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     display: block;
//     background: linear-gradient(135deg, rgba(0,40,60,0.8) 0%,rgba(0,20,40,0.7) 100%);
//     border-radius: 5px;

//     backdrop-filter: blur(2px);
//   }

//   .read-next-card-header {
//     position: relative;
//     z-index: 50;
//     padding-top: 20px;
//     text-align: center;
//   }

//   .read-next-card-header-sitetitle {
//     display: block;
//     font-size: 1.3rem;
//     line-height: 1.3em;
//     opacity: 0.8;
//   }

//   .read-next-card-header-title {
//     margin: 0;
//     padding: 0 20px;
//     color: #fff;
//     font-size: 3rem;
//     line-height: 1.2em;
//     letter-spacing: 1px;
//   }

//   .read-next-card-header-title a {
//     color: #fff;
//     font-weight: 300;
//     text-decoration: none;
//   }

//   .read-next-card-header-title a:hover {
//     text-decoration: none;
//   }

//   .read-next-divider {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     height: 80px;
//   }

//   .read-next-divider svg {
//     width: 40px;
//     fill: transparent;
//     stroke: #fff;

//     stroke-width: 0.5px;
//     stroke-opacity: 0.65;
//   }

//   .read-next-card-content {
//     position: relative;
//     z-index: 50;
//     flex-grow: 1;
//     display: flex;
//     font-size: 1.7rem;
//   }

//   .read-next-card-content ul {
//     display: flex;
//     flex-direction: column;
//     margin: 0 auto;
//     padding: 0;
//     text-align: center;
//     list-style: none;
//   }

//   .read-next-card-content li {
//     margin: 0;
//     padding: 0;
//     font-size: 1.6rem;
//     line-height: 1.25em;
//     font-weight: 200;
//     letter-spacing: -0.5px;
//   }

//   .read-next-card-content li a {
//     display: block;
//     padding: 20px 0;
//     border-bottom: rgba(255,255,255,0.3) 1px solid;
//     color: #fff;
//     font-weight: 500;
//     vertical-align: top;
//     transition: opacity 0.3s ease;
//   }

//   .read-next-card-content li:first-of-type a {
//     padding-top: 10px;
//   }

//   .read-next-card-content li a:hover {
//     opacity: 1;
//   }

//   .read-next-card-footer {
//     position: relative;
//     margin: 15px 0 3px 0;
//     text-align: center;
//   }

//   .read-next-card-footer a {
//     color: #fff;
//   }


//   .floating-header {
//     visibility: hidden;
//     position: fixed;
//     top: 0;
//     right: 0;
//     left: 0;
//     z-index: 1000;
//     display: flex;
//     align-items: center;
//     height: 60px;
//     border-bottom: rgba(0,0,0,0.06) 1px solid;
//     background: rgba(255,255,255,0.95);
//     transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
//     transform: translate3d(0, -120%, 0);
//   }

//   .floating-active {
//     visibility: visible;
//     transition: all 500ms cubic-bezier(0.22, 1, 0.27, 1);
//     transform: translate3d(0, 0, 0);
//   }

//   .floating-header-logo {
//     overflow: hidden;
//     margin: 0 0 0 20px;
//     font-size: 1.6rem;
//     line-height: 1em;
//     letter-spacing: -1px;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   }

//   .floating-header-logo a {
//     display: flex;
//     align-items: center;
//     color: ${colors.darkgrey};
//     line-height: 1.1em;
//     font-weight: 700;
//   }

//   .floating-header-logo a:hover {
//     text-decoration: none;
//   }

//   .floating-header-logo img {
//     margin: 0 10px 0 0;
//     max-height: 20px;
//   }

//   .floating-header-divider {
//     margin: 0 5px;
//     line-height: 1em;
//   }

//   .floating-header-title {
//     flex: 1;
//     overflow: hidden;
//     margin: 0;
//     color: #2e2e2e;
//     font-size: 1.6rem;
//     line-height: 1.3em;
//     font-weight: bold;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   }

//   .floating-header-share {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     padding-left: 2%;
//     font-size: 1.3rem;
//     line-height: 1;
//   }

//   .floating-header-share a {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .floating-header-share svg {
//     width: auto;
//     height: 16px;
//     fill: #fff;
//   }

//   .floating-header-share-label {
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     margin-right: 10px;
//     color: rgba(0,0,0,0.7);
//     font-weight: 500;
//   }

//   .floating-header-share-label svg {
//     margin: 0 5px 0 10px;
//     width: 18px;
//     height: 18px;
//     stroke: rgba(0,0,0,0.7);
//     transform: rotate(90deg);
//   }

//   .floating-header-share-tw,
//   .floating-header-share-fb {
//     display: block;
//     align-items: center;
//     width: 60px;
//     height: 60px;
//     color: #fff;
//     line-height: 48px;
//     text-align: center;
//     transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
//   }

//   .floating-header-share-tw {
//     background: #33b1ff;
//   }

//   .floating-header-share-fb {
//     background: #005e99;
//   }

//   .progress {
//     position: absolute;
//     right: 0;
//     bottom: -1px;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     border: none;
//     color: ${colors.blue};
//     background: transparent;

//     appearance: none;
//   }

//   .progress::-webkit-progress-bar {
//     background-color: transparent;
//   }

//   .progress::-webkit-progress-value {
//     background-color: ${colors.blue};
//   }

//   .progress::-moz-progress-bar {
//     background-color: ${colors.blue};
//   }

//   .progress-container {
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     width: 100%;
//     height: 2px;
//     background-color: transparent;
//   }

//   .progress-bar {
//     display: block;
//     width: 50%;
//     height: inherit;
//     background-color: ${colors.blue};
//   }

//   @media (max-width: 900px) {
//     .floating-header {
//         height: 40px;
//     }
//     .floating-header-title,
//     .floating-header-logo {
//         font-size: 1.5rem;
//     }
//     .floating-header-share-tw,
//     .floating-header-share-fb {
//         width: 40px;
//         height: 40px;
//         line-height: 38px;
//     }
//   }

//   @media (max-width: 800px) {
//     .floating-header-logo {
//         margin-left: 10px;
//     }
//     .floating-header-logo a {
//         color: #2e2e2e;
//     }
//     .floating-header-title,
//     .floating-header-divider {
//         visibility: hidden;
//     }
//   }

//   @media (max-width: 450px) {
//     .floating-header-share-label {
//         display: none;
//     }
//   }



//   .post-content {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     max-width: 920px;
//   }

//   .post-template .post-content > p:first-child {
//     font-size: 1.25em;
//     line-height: 1.5em;
//   }

//   .post-full-content .kg-image {
//     max-width: 100%;
//   }

//   .post-full-image + .post-full-content .kg-content *:first-child .kg-image {
//     width: 100%;
//   }

//   .post-full-content .kg-width-wide .kg-image {
//     max-width: 1040px;
//   }

//   .post-full-content .kg-width-full .kg-image {
//     max-width: 100vw;
//   }

//   .post-full-content figure {
//     margin: 1.5em 0 3em;
//   }

//   .post-full-content figure img {
//     margin: 0;
//   }

//   .post-full-content figcaption {
//     margin: 1.0em 0 0;
//     font-size: 80%;
//     line-height: 1.6em;
//     text-align: center;
//   }

//   .kg-width-full figcaption {
//     padding: 0 1.5em;
//   }

//   .kg-embed-card {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     min-width: 100%;
//   }

//   .kg-embed-card .fluid-width-video-wrapper {
//     margin: 0;
//   }


//   @media (max-width: 1040px) {
//     .post-full-content .kg-width-full .kg-image {
//         width: 100vw;
//     }
//   }

//   .kg-gallery-container {
//     display: flex;
//     flex-direction: column;
//     max-width: 1040px;
//     width: 100vw;
//   }

//   .kg-gallery-row {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//   }

//   .kg-gallery-image img {
//     display: block;
//     margin: 0;
//     width: 100%;
//     height: 100%;
//   }

//   .kg-gallery-row:not(:first-of-type) {
//     margin: 0.75em 0 0 0;
//   }

//   .kg-gallery-image:not(:first-of-type) {
//     margin: 0 0 0 0.75em;
//   }


//   .site-header-content .author-profile-image {
//     z-index: 10;
//     flex-shrink: 0;
//     margin: 0 0 20px 0;
//     width: 100px;
//     height: 100px;
//     box-shadow: rgba(255,255,255,0.1) 0 0 0 6px;
//   }

//   .site-header-content .author-bio {
//     z-index: 10;
//     flex-shrink: 0;
//     margin: 5px 0 10px 0;
//     max-width: 600px;
//     font-size: 2rem;
//     line-height: 1.3em;
//     font-weight: 300;
//     letter-spacing: 0.5px;
//     opacity: 0.8;
//   }

//   .site-header-content .author-meta {
//     z-index: 10;
//     flex-shrink: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0 0 10px 0;
//     font-family: Georgia, serif;
//     font-style: italic;
//   }

//   .site-header-content .author-location svg {
//     height: 1.9rem;
//     stroke: #fff;
//   }

//   .site-header-content .bull {
//     display: inline-block;
//     margin: 0 12px;
//     opacity: 0.5;
//   }

//   .site-header-content .social-link:first-of-type {
//     padding-left: 4px;
//   }

//   @media (max-width: 500px) {
//     .site-header-content .author-bio {
//         font-size: 1.8rem;
//         line-height: 1.15em;
//         letter-spacing: 0;
//     }
//     .author-location,
//     .author-stats {
//         display: none;
//     }
//   }



//   .error-template .site-main {
//     padding: 7vw 4vw;
//   }

//   .site-nav-center {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//   }

//   .site-nav-center .site-nav-logo {
//     margin-right: 0;
//   }

//   .error-message {
//     text-align: center;
//   }

//   .error-code {
//     margin: 0;
//     font-size: 12vw;
//     line-height: 1em;
//     letter-spacing: -5px;
//     opacity: 0.3;
//   }

//   .error-description {
//     margin: 0;
//     color: ${colors.midgrey};
//     font-size: 3rem;
//     line-height: 1.3em;
//     font-weight: 400;
//   }

//   @media (max-width: 800px) {
//     .error-description {
//         margin: 5px 0 0 0;
//         font-size: 1.8rem;
//     }
//   }

//   .error-link {
//     display: inline-block;
//     margin-top: 5px;
//   }

//   .error-template .post-feed {
//     padding-top: 0;
//   }



//   .subscribe-overlay {
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 9000;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: rgba(0,25,40,0.97);
//     opacity: 0;
//     transition: opacity 200ms ease-in;
//     pointer-events: none;

//     backdrop-filter: blur(3px);
//   }

//   .subscribe-overlay:target {
//     opacity: 1;
//     pointer-events: auto;
//   }

//   .subscribe-overlay-content {
//     position: relative;
//     z-index: 9999;
//     margin: 0 0 5vw 0;
//     padding: 4vw;
//     color: #fff;
//     text-align: center;
//   }

//   .subscribe-overlay-logo {
//     position: fixed;
//     top: 23px;
//     left: 30px;
//     height: 30px;
//   }

//   .subscribe-overlay-title {
//     display: inline-block;
//     margin: 0 0 10px 0;
//     font-size: 6rem;
//     line-height: 1.15em;
//   }

//   .subscribe-overlay-description {
//     margin: 0 auto 50px;
//     max-width: 650px;
//     font-family: Georgia, serif;
//     font-size: 3rem;
//     line-height: 1.3em;
//     font-weight: 300;
//     opacity: 0.8;
//   }

//   .subscribe-overlay form {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 0 auto;
//     max-width: 500px;
//   }

//   .subscribe-overlay .form-group {
//     flex-grow: 1;
//   }

//   .subscribe-overlay .subscribe-email {
//     display: block;
//     padding: 14px 20px;
//     width: 100%;
//     border: none;
//     color: ${colors.midgrey};
//     font-size: 2rem;
//     line-height: 1em;
//     font-weight: normal;
//     letter-spacing: 0.5px;
//     user-select: text;
//     border-radius: 8px;
//     transition: border-color 0.15s linear;

//     -webkit-appearance: none;
//   }

//   .subscribe-email:focus {
//     outline: 0;
//     border-color: color(${colors.lightgrey} l(-2%));
//   }

//   .subscribe-overlay button {
//     display: inline-block;
//     margin: 0 0 0 15px;
//     padding: 0 25px;
//     height: 52px;
//     outline: none;
//     color: #fff;
//     font-size: 1.7rem;
//     line-height: 37px;
//     font-weight: 400;
//     text-align: center;
//     text-shadow: 0 -1px 0 rgba(0,0,0,0.1);
//     background: linear-gradient(
//     color(${colors.blue} whiteness(+7%)),
//     color(${colors.blue} lightness(-7%) saturation(-10%)) 60%,
//     color(${colors.blue} lightness(-7%) saturation(-10%)) 90%,
//     color(${colors.blue} lightness(-4%) saturation(-10%))
//     );
//     border-radius: 8px;
//     box-shadow: 0 0 0 1px inset rgba(0,0,0,0.14);

//     -webkit-font-smoothing: subpixel-antialiased;
//   }

//   .subscribe-overlay button:active,
//   .subscribe-overlay button:focus {
//     background: color(${colors.blue} lightness(-9%) saturation(-10%));
//   }

//   .subscribe-overlay-close {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     display: block;
//   }

//   .subscribe-overlay-close:before {
//     content: "";
//     position: absolute;
//     top: 40px;
//     right: 25px;
//     display: block;
//     width: 30px;
//     height: 2px;
//     background: #fff;
//     opacity: 0.8;
//     transform: rotate(45deg);
//   }

//   .subscribe-overlay-close:after {
//     content: "";
//     position: absolute;
//     top: 40px;
//     right: 25px;
//     display: block;
//     width: 30px;
//     height: 2px;
//     background: #fff;
//     opacity: 0.8;
//     transform: rotate(-45deg);
//   }

//   .subscribe-overlay-close:hover {
//     cursor: default;
//   }


//   .site-footer {
//     position: relative;
//     padding-top: 20px;
//     padding-bottom: 60px;
//     color: #fff;
//     background: color(${colors.darkgrey} l(-15%));
//   }

//   .site-footer-content {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     align-items: center;
//     color: rgba(255,255,255,0.7);
//     font-size: 1.3rem;
//   }

//   .site-footer-content a {
//     color: rgba(255,255,255,0.7);
//   }

//   .site-footer-content a:hover {
//     color: rgba(255,255,255,1);
//     text-decoration: none;
//   }

//   .site-footer-nav {
//     display: flex;
//   }

//   .site-footer-nav a {
//     position: relative;
//     margin-left: 20px;
//   }

//   .site-footer-nav a:before {
//     content: "";
//     position: absolute;
//     top: 11px;
//     left: -11px;
//     display: block;
//     width: 2px;
//     height: 2px;
//     background: #fff;
//     border-radius: 100%;
//   }

//   .site-footer-nav a:first-of-type:before {
//     display: none;
//   }

//   @media (max-width: 650px) {
//     .site-footer-content {
//         flex-direction: column;
//     }
//     .site-footer-nav a:first-child {
//         margin-left: 0;
//     }
//   }
// `;