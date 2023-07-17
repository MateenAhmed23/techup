import React, { useRef } from 'react';
import "./csssubcomponents/skills.css"

function SkillsTag({ setParentTags, label }) {
    const [tags, setTags] = React.useState([]);
    const tagInput = useRef(null); // Declare the tagInput reference using useRef

    const removeTag = (i) => {
        const newTags = [...tags];
        newTags.splice(i, 1);
        setTags(newTags);
        setParentTags(newTags);
    };

    const inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setTags([...tags, val]);
            setParentTags([...tags, val]);
            tagInput.current.value = ''; // Access the input value using ref.current
        } else if (e.key === 'Backspace' && !val) {
            removeTag(tags.length - 1);
        }
    };

    return (
        <div>
            <label className={"form-label"}>{label}</label>
            <div className="input-tag">
                <ul className="input-tag__tags">
                    {tags.map((tag, i) => (
                        <li key={tag}>
                            {tag}
                            <button type="button" onClick={() => removeTag(i)}>
                                +
                            </button>
                        </li>
                    ))}
                    <li className="input-tag__tags__input">
                        <input type="text" onKeyDown={inputKeyDown} ref={tagInput} /> {/* Assign the ref */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SkillsTag;
