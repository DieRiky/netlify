// pages/index.js
export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Subdomain Take Over</h1>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: '48px',
    color: '#333',
  },
}
