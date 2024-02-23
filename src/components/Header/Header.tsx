import styles from './styles.module.scss';
import { ReactNode } from 'react';
import { PLATFORM_NAME } from '@/lib/constants';

interface HeaderProps {
  hidable?: boolean;
  hide?: boolean;
  onHide?: () => void;
  children?: ReactNode;
}

export default function Header({
  hidable = false,
  hide = false,
  onHide = () => {},
  children,
}: HeaderProps) {
  return (
    <>
      <header className={styles.header} data-hide={hide}>
        <a className={styles['header-action']} href="#">
          {PLATFORM_NAME}
        </a>
        {hidable && (
          <div
            className={`${styles['header-action']} ${styles['header-hide']}`}
            onClick={() => onHide()}
          >
            {hide ? '↓' : '↑'}
          </div>
        )}
      </header>
      <main className={styles.main} data-hide={hide}>
        {children}
      </main>
    </>
  );
}
