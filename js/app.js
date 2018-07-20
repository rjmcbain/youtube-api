// Options
const CLIENT_ID = '286229363565-3ssmvhlku6cljh12knc7sghsi5oguirl.apps.googleusercontent.com';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');

// Load auth2 library
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

// Init API client library and set up sign in listeners
function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scopes: SCOPES
    }).then(() => {
        // Listen for sign in state changes
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        // Handle initial sign in state
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onClick = handleAuthClick;
        signoutButton.onClick = handleSignoutClick;
    });
}

// Update UI sign in state changes
function updateSignInStatus(isSignedIn) {
    if(isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        content.style.display = 'block';
        videoContainer.style.display = 'block';
    } else {

    }
}


















AIzaSyDqZk8KhMvyhO_v-LxsBK0tTyHFRbohgsQ



93BOo4m9oBTVZW7DGoMBSB9v