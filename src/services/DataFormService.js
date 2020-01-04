const initialState = {
  reachedLevel: 1,
  currLevel: 1,
  levels: [
    {
      title: 'פרטי המבקש',
      sections: [
        {
          subTitle: 'פרטי הספק',
          _id: 101,
          fields: [
            {
              name: 'שם הספק',
              type: '',
              isMandatory: 'יש למלא את שם הספק',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'מקור הטובין',
              type: 'dropDownSelect',
              isMandatory: 'יש לבחור מקור טובין',
              validation: '',
              placeholder: 'בחר/י מקור',
              value: '',
              list: [{ id: 1, title: "ישראל" }, { id: 2, title: "חוץ לארץ" }]
            },
            {
              name: 'מספר ח"פ',
              type: 'inputNumbers',
              isMandatory: 'נא להוסיף לספר ח"פ',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'מדינת המקור',
              type: '',
              isMandatory: 'נא להוסיף את מדינת המקור',
              validation: '',
              placeholder: '',
              value: ''
            },
          ]
        },
        {
          subTitle: 'פרטי איש קשר בחברה',
          _id: 102,
          fields: [
            {
              name: 'שם מלא',
              type: '',
              isMandatory: 'נא לרשום שם פרטי ושם משפחה',
              validation: '',
              placeholder: '',
              value: '',
              secondName: 'שם איש קשר'
            },
            {
              name: 'ת"ז',
              type: 'inputNumbers',
              isMandatory: 'יש לרשום את מספר תעודת הזהות',
              validation: '',
              placeholder: '',
              value: '',
              secondName: 'מספר ת"ז'
            },
            {
              name: 'כתובת דוא"ל',
              type: '',
              isMandatory: 'נא להזין כתובת דואר אלקטרוני',
              information: 'כתובת דואר אלקטרוני ליצירת קשר ועדכונים על תהליך הבקשה.',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'מספר טלפון נייד',
              type: 'inputNumbers',
              isMandatory: 'יש לרשום טלפון נייד',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'מספר טלפון נוסף',
              type: 'inputNumbers',
              isMandatory: '',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'מספר פקס',
              type: 'inputNumbers',
              isMandatory: '',
              validation: '',
              placeholder: '',
              value: ''
            },
          ]
        },
        {
          subTitle: 'פרטי עמיל מכס',
          _id: 103,
          fields: [
            {
              name: 'שם עמיל מכס',
              type: '',
              isMandatory: 'יש לרשום שם עמיל מכס',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'מספר עמיל המכס',
              type: 'inputNumbers',
              isMandatory: 'יש למלא את מספר עמיל המכס',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'מספר טלפון',
              type: 'inputNumbers',
              isMandatory: 'יש להזין מספר טלפון',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'נקודת כניסה לישראל',
              type: '',
              isMandatory: 'יש להזין נקודת כניסה לישראל',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'חשבון ספק',
              type: '',
              isMandatory: 'יש למלא חשבון ספק',
              validation: '',
              placeholder: '',
              value: ''
            },
          ]
        },
      ]
    },
    {
      title: 'פרטי החומרים המבוקשים ופרטי המשלוח',
      sections: [
        {
          subTitle: 'פריט 1',
          _id: 104,
          fields: [
            {
              name: 'שם הפריט',
              type: '',
              isMandatory: 'יש למלא את שם הפריט',
              information: 'שם הפריט כפי שמופיע באלון חומרים ועזרים.',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'קטגוריה',
              type: 'dropDownSelect',
              isMandatory: 'יש לבחור קטגוריה',
              validation: '',
              placeholder: 'בחר/י קטגוריה',
              value: '',
              list: [{ id: 1, title: "חקלאות" }, { id: 2, title: "בריאות" }]
            },
            {
              name: 'ייעוד הפריט',
              type: '',
              isMandatory: 'יש למלא את ייעוד הפריט',
              information: 'מהו היעד השימוש של הפריט הנבחר, ניתן לציין גם את המוצר.',
              validation: '',
              placeholder: '',
              value: '',
              secondName: 'יעוד הפריט'
            },
            {
              name: 'כמות מבוקשת (ספרות בלבד)',
              type: 'quantity',
              isMandatory: 'יש למלא כמות מבוקשת בספרות בלבד',
              validation: '',
              placeholder: '',
              value: { kind: 'ק"ג', quantity: '' },
              list: [{ id: 1, title: "גרם" }, { id: 2, title: "ליטר" }],
              secondName: 'כמות מבוקשת'
            },
            {
              firstTitle: 'רשימת מרכיבים',
              name: 'הוספת מרכיב לפי שם, פורמולה או מספר CAS',
              type: 'dropDown',
              isMandatory: 'יש להוסיף מרכיב ואחוז',
              information: 'יש לכלול את כל תערובת הרכיבים, מיד לאחר הבחירה יהיה ניתן להגדיר את אחוז התערובת.',
              validation: '',
              placeholder: 'הקלידו כדי לחפש ובחרו מהתוצאות המוצעות',
              value: [],
              secondName: '',
              list: [
                {
                  id: "5d67a432074512ed1a969d57",
                  inventoryName: "hexbis[O,O-bis(2-ethylhexyl)",
                  casNumber: "68958-92-9",
                  molecularFormula: "C32H68Mo2O6P2S6",
                  percent: ''
                },
                {
                  id: "5d67a432074512ed1a96bd5d",
                  inventoryName: "hexacarbonylbis(?5-cyclopenta-2,4-dien-1-yl)",
                  casNumber: "12091-64-4",
                  molecularFormula: "C16H10Mo2O6",
                  percent: ''
                },
              ]
            },
          ]
        },
        {
          subTitle: 'יעד המשלוח',
          _id: 105,
          fields: [
            {
              name: 'אזור היעד',
              type: 'ratio',
              isMandatory: 'יש למלא את אזור היעד',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'שם מקבל המשלוח/החברה',
              type: '',
              isMandatory: 'יש למלא שם מקבל המשלוח/החברה',
              information: 'שם מלא של המקבל, רק אותו גורם יוכל לאשר את קבלת המשלוח.',
              validation: '',
              placeholder: '',
              value: '',
              secondName: 'שם מקבל המשלוח'
            },
            {
              name: 'מספר טלפון של מקבל המשלוח',
              type: '',
              isMandatory: 'יש להזין מספר טלפון',
              validation: '',
              placeholder: '',
              value: '',
              secondName: 'מספר טלפון'
            },
            {
              name: 'כתובת',
              type: '',
              isMandatory: 'יש למלא כתובת',
              information: 'כתובת למשלוח עיקרית כולל אזור, רחוב ומספר רחוב, במידה המקום במבנה קומות יש להוסיף קומה ומספר דירה.',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'נפה',
              type: 'dropDownSelect',
              isMandatory: 'יש לבחור נפה',
              validation: '',
              placeholder: 'בחר/י נפה',
              value: '',
              list: [{ id: 1, title: "עזה" }, { id: 2, title: 'איו"ש' }]
            },
            {
              name: 'מעבר מבוקש',
              type: 'dropDownSelect',
              isMandatory: 'יש לבחור מעבר מבוקש',
              validation: '',
              placeholder: 'בחר/י מעבר',
              value: '',
              list: [{ id: 1, title: "טול כרם" }, { id: 2, title: "שער אפריים" }]
            },
            {
              name: 'ערך כספי של הסחורה',
              type: 'quantity',
              isMandatory: 'יש למלא ערך כספי בספרות בלבד',
              information: 'שווי הסחורה ללא מע"מ, לא כולל דמי משלוח.',
              validation: '',
              placeholder: '',
              value: { kind: 'ש"ח', quantity: '' },
              list: [{ id: 1, title: 'ש"ח' }, { id: 2, title: '$' }, { id: 3, title: '€' }],
            },
            {
              name: 'שם הנהג',
              type: '',
              isMandatory: 'יש למלא את שם הנהג',
              validation: '',
              placeholder: '',
              value: ''
            },
            {
              name: 'ת"ז הנהג',
              type: 'inputNumbers',
              isMandatory: 'יש למלא תעודת זהות של הנהג',
              validation: '',
              placeholder: '',
              value: ''
            },
          ]
        },
        {
          subTitle: 'מידע נוסף (אופציונלי)',
          _id: 106,
          fields: [
            {
              name: 'צירוף מסמכים נוספים לבקשה',
              type: 'uploadFile',
              isMandatory: '',
              information: 'ניתן לצרף מסמכים המעידים של היתר עבודה מול הסחורה.',
              validation: '',
              placeholder: 'העלאת קובץ',
              value: [],
              secondName: 'מסמכים נוספים'
            },
            {
              name: 'הערות לבקשה',
              type: 'textArea',
              isMandatory: '',
              validation: '',
              placeholder: '',
              value: ''
            }
          ]
        }
      ]
    },
    {
      title: 'אישור וסיום',
      sections: []
    }
  ]
}

function getData() {
  return Promise.resolve(initialState)
}

export default {
  getData,
}