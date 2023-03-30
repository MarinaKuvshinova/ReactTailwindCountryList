import React from 'react'

export default function RowInfo({name, value}) {
    const convertValue = (elValue) => {
        if (typeof elValue.value == 'object') {
            const isWithObject = elValue.value.some(v => { return typeof v == "object" } );
            if (isWithObject) {
                const key = elValue.nameValue;
                const arrayValue = [];
                elValue.value.find(k => arrayValue.push(k[key]));
                return arrayValue.join(', ');
            }
            return elValue.value.join(', ');
        }
        return elValue.value;
    }

  return (
    <div>
        <span className='font-bold pr-1'>{name}:</span>
        <span>{convertValue(value)}</span>
    </div>
  )
}
