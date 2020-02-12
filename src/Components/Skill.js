import React from 'react';

export default function Skill({ name, attribute }) {
	return <React.Fragment>{name} <span style={{ opacity: 0.5 }}>({attribute})</span></React.Fragment>;
}