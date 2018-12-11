package com.codecool.dartvaders.model;

public class Player {

    private String name;
    private int id;
    private String email;
    private int gamesPlayed;
    private int bestOfThree;
    private int wins;
    private int actualScore;
    private int legsWon;

    public void setActualScore(int actualScore) {
        this.actualScore = actualScore;
    }

    public void setLegsWon(int legsWon) {
        this.legsWon = legsWon;
    }


    public int getScore() {
        return actualScore;
    }
}
