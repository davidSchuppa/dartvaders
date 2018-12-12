let player = {

    score: 0,
    thrownScore: 0,
    bestOfThree: 0,

    setScore: function() {
        score -= this.thrownScore;
    },

    setBestOfThree: function () {
        if (this.thrownScore > this.bestOfThree) {
            this.bestOfThree = this.thrownScore;
        }
    },




}