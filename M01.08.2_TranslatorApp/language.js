const translations_English = {
    'malay': {
      'morning': 'pagi',
      'afternoon': 'tengahari',
      'evening': 'petang',
      'night': 'malam',
    },
    'english': {
      'morning': 'morning',
      'afternoon': 'afternoon',
      'evening': 'evening',
      'night': 'night',
    },
    'chinese': {
      'morning': '早上',
      'afternoon': '下午',
      'evening': '晚上',
      'night': '晚',
    },
    'japanese': {
        'morning': '朝',
        'afternoon': '午後',
        'evening': '夕方',
        'night': '夜',
    }
};

const translations_Malay = {
    'malay': {
        'pagi': 'pagi',
        'tengahari': 'tengahari',
        'petang': 'petang',
        'malam': 'malam',
      },
      'english': {
        'pagi': 'morning',
        'tengahari': 'afternoon',
        'petang': 'evening',
        'malam': 'night',
      },
      'chinese': {
        'pagi': '早上',
        'tengahari': '下午',
        'petang': '晚上',
        'malam': '晚',
      },
      'japanese': {
        'pagi': '朝',
        'tengahari': '午後',
        'petang': '夕方',
        'malam': '夜',
      },
};

const translations_Japan = {
    'malay': {
        '朝': 'pagi',
        '午後': 'tengahari',
        '夕方': 'petang',
        '夜': 'malam',
      },
      'english': {
        '朝': 'morning',
        '午後': 'afternoon',
        '夕方': 'evening',
        '夜': 'night',
      },
      'chinese': {
        '朝': '早上',
        '午後': '下午',
        '夕方': '晚上',
        '夜': '晚',
      },
      "japanese": {
        '朝': '朝',
        '午後': '午後',
        '夕方': '夕方',
        '夜': '夜',
      },
};

const translations_China = {
    'malay': {
        '早上': 'pagi',
        '下午': 'tengahari',
        '晚上': 'petang',
        '晚': 'malam',
      },
      'english': {
        '早上': 'morning',
        '下午': 'afternoon',
        '晚上': 'evening',
        '晚': 'night',
      },
      'chinese': {
        '早上': '早上',
        '下午': '下午',
        '晚上': '晚上',
        '晚': '晚',
    },
    'japanese': {
        '早上': '朝',
        '下午': '午後',
        '晚上': '夕方',
        '晚': '夜',
    },
};
  
export function translate(languageInput, languageOutput, inputText) {
    var activeLanguage = null;
    switch(languageInput.toLowerCase()) {
        case "english":
            activeLanguage = translations_English;
            break
        case "japanese":
            activeLanguage = translations_Japan;
            break
        case "chinese":
            activeLanguage = translations_China;
            break
        case "malay":
            activeLanguage = translations_Malay;
            break
        default:
            activeLanguage = null;
    }
    
    if (activeLanguage === undefined)
        return alert(`This language ${languageInput} is not fully supported`);

    return activeLanguage[languageOutput.toLowerCase()][inputText];
}