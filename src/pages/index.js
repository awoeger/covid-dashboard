import Head from 'next/head';
import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import Map from '../components/Map';

const DEFAULT_CENTER = [38.907132, -77.036546];

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Find every country's national dish</h1>
      <label aria-label="Search bar">
        <input
          name="Search"
          placeholder="Search for continents"
          value={search}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
          }}
        />
      </label>

      <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={DEFAULT_CENTER}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </Map>
    </div>
  );
}
