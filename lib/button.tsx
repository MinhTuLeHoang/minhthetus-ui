import React from 'react';

interface MinhTheTusButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

const MinhTheTusButton = ({ ...props }: MinhTheTusButtonProps) => {
	return (
		<div {...props}>
			<button>hello world</button>
		</div>
	);
};

export default MinhTheTusButton;