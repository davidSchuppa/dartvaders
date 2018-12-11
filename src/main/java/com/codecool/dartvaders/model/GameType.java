package com.codecool.dartvaders.model;

public enum GameType {

    GAME_501(501),
    GAME_301(301);

    private int score;

    GameType(int score) {
        this.score = score;
    }

    public int getScore() {
        return score;
    }
}
