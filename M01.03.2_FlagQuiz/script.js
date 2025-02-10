function startQuiz() {
    const { flag, flagName } = getRandomFlag();
    const guess = prompt(`What does this ${flag} stands for?`);

    if (guess.toLowerCase() === flagName) {
        alert('You guessed correctly');
    } else {
        alert(`Sorry, the correct value was ${flagName}.`);
    }
}

function getRandomFlag() {
    const flagList = [
      { flag: '🇦🇷', flagName: 'argentina' },
      { flag: '🇧🇷', flagName: 'brazil' },
      { flag: '🇨🇦', flagName: 'canada' },
      { flag: '🇩🇪', flagName: 'denmark' },
      { flag: '🇪🇬', flagName: 'egypt' },
      { flag: '🇫🇷', flagName: 'france' },
      { flag: '🇬🇧', flagName: 'great britain' },
      { flag: '🇭🇳', flagName: 'honduras' },
      { flag: '🇮🇹', flagName: 'italy' },
      { flag: '🇯🇵', flagName: 'japan' },
      { flag: '🇰🇿', flagName: 'kazakhstan' },
      { flag: '🇱🇧', flagName: 'lebanon' },
      { flag: '🇲🇾', flagName: 'malaysia' },
      { flag: '🇳🇱', flagName: 'netherlands' },
      { flag: '🇴🇲', flagName: 'oman' },
      { flag: '🇵🇪', flagName: 'peru' },
      { flag: '🇶🇦', flagName: 'qatar' },
      { flag: '🇷🇺', flagName: 'russia' },
      { flag: '🇸🇬', flagName: 'singapore' },
      { flag: '🇹🇷', flagName: 'turkey' },
      { flag: '🇺🇸', flagName: 'united states' },
      { flag: '🇻🇳', flagName: 'vietnam' },
      { flag: '🇾🇪', flagName: 'yemen' }
    ];

    const flagListLength = flagList.length;
    const randomIndex = Math.floor(Math.random() * flagListLength);

    return flagList[randomIndex];
}