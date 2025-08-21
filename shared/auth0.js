import createAuth0Client from 'https://cdn.jsdelivr.net/npm/@auth0/auth0-spa-js@2/+esm';

export let auth0 = null;

export async function initAuth0() {
  auth0 = await createAuth0Client({
    domain: 'ronovys.eu.auth0.com',
    client_id: 'PIsBVcJ5HbQA1S2ob3vdNOTGhtdP6z4K',
    cacheLocation: 'localstorage',
    useRefreshTokens: true
  });
}

export async function login() {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
}

export async function logout() {
  auth0.logout({
    returnTo: window.location.origin
  });
}

export async function getUser() {
  return await auth0.getUser();
}

