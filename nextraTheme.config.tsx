import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { OramaSearch } from "@orama/plugin-nextra";

const config: DocsThemeConfig = {
  logo: "Logo",
  // logo: "sdfdf",
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://edisglobal.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <link rel='shortcut icon' href='/favicon.png' />
        <meta property='og:url' content={url} />
        <meta
          property='og:title'
          content={frontMatter.title || "EDIS Global"}
        />
        <meta
          property='og:description'
          content={frontMatter.description || "EDIS Global VPS Documentation"}
        />
      </>
    );
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – Edis Global",
    };
  },
  project: {
    link: "https://github.com/IlirEdis/docs",
  },
  chat: {
    link: "https://www.edisglobal.com/contact",
    icon: "",
  },
  docsRepositoryBase: "https://github.com/IlirEdis/docs",
  footer: {
    text: `${new Date().getFullYear()} © EDIS Global`,
  },
  search: {
    component: OramaSearch,
  },
  // editLink: {
  //   component: undefined,
  // },
  gitTimestamp: "Last updated on",
  primaryHue: 20,
};

export default config;
