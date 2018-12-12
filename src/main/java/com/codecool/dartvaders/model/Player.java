package com.codecool.dartvaders.model;

public class Player {

    private String name;
    private int id;
    private String email;
    private int gamesPlayed;
    private int bestOfThree = 0;
    private int wins;
    private int actualScore = 0;
    private int pointRemaining;
    private int legsWon;

    private double scorePerDart = 0.0d;
    private double scorePerRound = 0.0d;

    public Player(String name) {
        this.name = name;
    }

    public void setScorePerRound(double scorePerRound) {
        this.scorePerRound = scorePerRound;
    }

    public void setScorePerDart(double scorePerDart) {
        this.scorePerDart = scorePerDart;
    }

    public void setActualScore(int actualScore) {
        this.actualScore = actualScore;
    }

    public void setLegsWon(int legsWon) {
        this.legsWon = legsWon;
    }

    public void setGamesPlayed(int gamesPlayed) {
        this.gamesPlayed = gamesPlayed;
    }

    public void setBestOfThree(int bestOfThree) {
        this.bestOfThree = bestOfThree;
    }

    public void setWins(int wins) {
        this.wins = wins;
    }

    public int getScore() {
        return actualScore;
    }

    @Override
    public String toString() {
        return "Player{" +
                "name='" + name + '\'' +
                ", actualScore=" + actualScore +
                '}';
    }

    public void setPointRemaining(int pointRemaining) {
        this.pointRemaining = pointRemaining;
    }

    public String getName() {
        return name;
    }

    public int getPointRemaining() {
        return pointRemaining;
    }

    public int getBestOfThree() {
        return bestOfThree;
    }

    public int getActualScore() {
        return actualScore;
    }

    public double getScorePerDart() {
        return scorePerDart;
    }

    public double getScorePerRound() {
        return scorePerRound;
    }

    public int getLegsWon() {
        return legsWon;
    }
}
