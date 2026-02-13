import styles from './ClientLogos.module.css';

interface Client {
  name: string;
  logo?: string;
}

interface ClientLogosProps {
  clients: Client[];
  title?: string;
}

export default function ClientLogos({ clients, title }: ClientLogosProps) {
  return (
    <div className={styles.container}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.carousel}>
        <div className={styles.track}>
          {[...clients, ...clients].map((client, index) => (
            <div key={`${client.name}-${index}`} className={styles.logo}>
              {client.logo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={client.logo} alt={client.name} />
              ) : (
                <span className={styles.placeholder}>{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
