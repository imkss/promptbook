import "@styles/globals.css";
import Nav from "@components/nav";
import Provider from "@components/Provider";
export const metadata = {
  icons:{icon:"/assets/images/logo.png"},
  apple:"/assets/images/logo.png",
  title: "Promptbook",
  description:
    "Discover and share AI-generated prompts for your next writing project.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
        {/* <footer>
          <h5>
            <b >
              Designed & Maintained with{" "}
              <span className="text-red-800">&#9825;</span> by{" "}
              <a href="https://linktr.ee/i_m_k_s_s" target="_blank">
                Sunny
              </a>{" "}
              &copy; 2024 All rights reserved
            </b>
          </h5>
        </footer> */}
      </body>
    </html>
  );
};
export default RootLayout;
