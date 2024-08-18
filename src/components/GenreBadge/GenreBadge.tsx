import React, { FC } from 'react';
import styles from './GenreBadge.module.css';

interface BadgeProps {
    context: string;
    color: string;
}

const GenreBadge: FC<BadgeProps> = ({ context, color }) => {
    return (
        <span className={styles.badge} style={{ backgroundColor: color}}>
            {context}
        </span>
    );
};

export default GenreBadge;