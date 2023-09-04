import check from '../assets/check.png';
import minus from '../assets/minus.png';

function formatOptions(tv) {
    return (
        <ul className="options-list">
            {tv.options.map((option, index) => (
                <li key={index}>
                    {option.applicable ? (
                        <img src={check} alt="Aanwezig" className="icon" />
                    ) : (
                        <img src={minus} alt="Niet aanwezig" className="icon" />
                    )}
                    {option.name}
                </li>
            ))}
        </ul>
    )
}

export default formatOptions;