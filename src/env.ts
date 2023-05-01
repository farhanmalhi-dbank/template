declare global {
  interface Window {
    env;
  }
}

// change with your own variables
type EnvType = {
  REACT_APP_SERVER_URL: string;
  REACT_APP_GRAPHQL_URL: string;
};
export const env: EnvType = { ...process.env, ...window.env };
