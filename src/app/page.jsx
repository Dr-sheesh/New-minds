'use client'
import * as styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [visibleElement, setVisibleElement] = useState(null);

  const toggleVisibility = (elementId) => {
    setVisibleElement(prev => prev === elementId ? null : elementId);
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.sidebar}>
        <button onClick={() => toggleVisibility('home')} className={styles.sidebtn}><h1>Flick</h1></button>
        <br />
        <br />
        <button onClick={() => toggleVisibility('history')} className={styles.sidebtn}>History</button>
        <br />
        <button onClick={() => toggleVisibility('clips')} className={styles.sidebtn}>Clips</button>
        <br />
        <button onClick={() => toggleVisibility('favorites')} className={styles.sidebtn}>Favorites</button>
        <br />
        <hr />
        <button onClick={() => toggleVisibility('account')} className={styles.sidebtn}>Account</button>
        <br />
        <button onClick={() => toggleVisibility('channel')} className={styles.sidebtn}>Channel</button>
        <br />
        <button onClick={() => toggleVisibility('playlists')} className={styles.sidebtn}>Playlists</button>
        <br />
        <button onClick={() => toggleVisibility('yourVideos')} className={styles.sidebtn}>Your Videos</button>
        <br />
        <button onClick={() => toggleVisibility('watchLater')} className={styles.sidebtn}>Watch Later</button>
        <br />
        <button onClick={() => toggleVisibility('likedVideos')} className={styles.sidebtn}>Liked Videos</button>
        <br />
        <hr />
        <p>Favorites</p>
      </div>
      
      <div className={styles.mainContent}>
        <div id='home' className={styles.toggleElement} style={{ visibility: visibleElement === null ? 'visible' : 'hidden' }}>
          <h1>Recommended Videos</h1>
          {/* Add content for recommended videos here */}
        </div>
        <div id='history' className={styles.toggleElement} style={{ visibility: visibleElement === 'history' ? 'visible' : 'hidden' }}>
          <h1>Watch History</h1>
        </div>
        <div id='clips' className={styles.toggleElement} style={{ visibility: visibleElement === 'clips' ? 'visible' : 'hidden' }}>
          <h1>Clips</h1>
        </div>
        <div id='favorites' className={styles.toggleElement} style={{ visibility: visibleElement === 'favorites' ? 'visible' : 'hidden' }}>
          <h1>Favorites</h1>
        </div>
        <div id='account' className={styles.toggleElement} style={{ visibility: visibleElement === 'account' ? 'visible' : 'hidden' }}>
          <h1>Account</h1>
        </div>
        <div id='channel' className={styles.toggleElement} style={{ visibility: visibleElement === 'channel' ? 'visible' : 'hidden' }}>
          <h1>Channel</h1>
        </div>
        <div id='playlists' className={styles.toggleElement} style={{ visibility: visibleElement === 'playlists' ? 'visible' : 'hidden' }}>
          <h1>Playlists</h1>
        </div>
        <div id='yourVideos' className={styles.toggleElement} style={{ visibility: visibleElement === 'yourVideos' ? 'visible' : 'hidden' }}>
          <h1>Your Videos</h1>
        </div>
        <div id='watchLater' className={styles.toggleElement} style={{ visibility: visibleElement === 'watchLater' ? 'visible' : 'hidden' }}>
          <h1>Watch Later</h1>
        </div>
        <div id='likedVideos' className={styles.toggleElement} style={{ visibility: visibleElement === 'likedVideos' ? 'visible' : 'hidden' }}>
          <h1>Liked Videos</h1>
        </div>
      </div>
    </div>
  );
}
