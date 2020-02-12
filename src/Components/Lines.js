import React from 'react';

export default function Lines({ count }) {
	return <div style={{ whiteSpace: 'pre', lineHeight: '15px', margin: '-10px', fontSize: '10px', textAlign: 'left', padding: '0 10px' }}>
		{[...Array(count)].map(() => '').join('\n') + '\u200b'}
	</div>;
}
