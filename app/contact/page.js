import Head from "../../components/MicroHead";
import SchemaBreadcrumbs from "../../components/SchemaBreadcrumbs";
import { default as u } from "../../public/scripts/modules/utilities";

// Edit per page:
import CustomStyle from "../../custom-style/PageContact";
const pageName = "Contact";

// definitions:
const appName = "Shell";
const baseHref = "https://localhost:3000/";
const pageCssName = u.kebabCase(pageName);
const dataMjs = u.camelCase(pageName);
// check this:
const urlSlug = pageCssName;

// derived definitions:
const appNameUC = appName.toUpperCase();
const canonical = baseHref + urlSlug;
const mainClasses = "main " + pageCssName;
const metaDescription = `${pageName} page description for ${appNameUC} application [70 characters are best here].`;
const title = `${pageName} | Shell`;

const breadcrumbArray = [
  {
    id: baseHref,
    name: "Home",
    imgUrl: `${baseHref}images/head/shell-115x35.jpg`,
  },
  {
    id: canonical,
    name: pageName,
    imgUrl: `${baseHref}images/head/shell-115x35.jpg`,
  },
];

const generatedNonce = process.env.generatedNonce;

export default function Main() {
  return (
    <>
      <Head
        canonical={canonical}
        title={title}
        metaDescription={metaDescription}
        nonce={generatedNonce}
      ></Head>

      <main className={mainClasses} data-mjs={dataMjs}>
        <h1 id="main-content" tabIndex="0">
          {pageName}
        </h1>
        <CustomStyle></CustomStyle>
        <h2 className="font-size-125rem">
          We’d love to hear from you. Please write to us using the form below.
        </h2>
        <form className="contact-form">
          <p className="padding-top-1em">
            <em>
              Please complete the fields below, then press Send at the bottom.
            </em>
          </p>
          <div className="input">
            <label htmlFor="input-sender">
              <strong>Your name *</strong>
            </label>
            <input
              id="input-sender"
              type="text"
              name="sender"
              title="Please fill out this field"
              autoComplete="on"
              required
            />
            <br />

            <label htmlFor="input-email">
              <strong>Your email *</strong>
            </label>
            <input
              id="input-email"
              type="email"
              name="email"
              title="Please fill out this field"
              autoComplete="on"
              required
            />
            <br />

            <label htmlFor="input-bot" className="bot" aria-hidden="true">
              <strong>How You Found Us *</strong>
            </label>
            <input
              id="input-bot"
              className="bot"
              type="text"
              name="bot"
              title="Please fill out this field"
              autoComplete="off"
              tabIndex="-1"
            />

            <label htmlFor="input-subject">
              <strong>Subject *</strong>
            </label>
            <input
              id="input-subject"
              type="text"
              name="subject"
              title="Please fill out this field"
              autoComplete="off"
              required
            />
            <br />

            <label htmlFor="input-message">
              <strong>Message *</strong>
            </label>
            <textarea
              id="input-message"
              name="message"
              title="Please fill out this field"
              autoComplete="off"
              required
            ></textarea>
            <p className="padding-top-1em">* Required fields.</p>
          </div>
          <div className="info-text padding-top-1em">
            <button type="submit" id="junk">
              Send
            </button>
            <p className="sending display-none">
              <em>Sending message...</em>
            </p>
            <p className="sent display-none">
              <em>Your message is sent.</em>
            </p>
          </div>
        </form>

        <SchemaBreadcrumbs
          breadcrumbArray={breadcrumbArray}
        ></SchemaBreadcrumbs>
      </main>
    </>
  );
}
