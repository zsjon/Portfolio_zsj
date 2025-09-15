// src/components/Button.tsx

type ButtonProps = {
    label: string;
    primary?: boolean;
    onClick?: () => void;
};

export const Button = ({ label, primary = false, onClick }: ButtonProps) => {
    return (
        <button
            style={{
                backgroundColor: primary ? "#123122" : "#eee",
                color: primary ? "white" : "black",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};