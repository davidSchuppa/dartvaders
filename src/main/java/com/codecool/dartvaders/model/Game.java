package com.codecool.dartvaders.model;

import java.util.ArrayList;
import java.util.List;

public class Game {

    private int legs;
    private int round = 1;
    private List<Player> players = new ArrayList<>();
    private int numberOfDoubles = 0;
    private int numberOfTriples = 0;
    private int highestTurn;
    private Player winner;
    private String gameType;

    public Game(int legs, List<Player> players, String gameType) {
        this.legs = legs;
        this.players = players;
        this.gameType = gameType;
    }

    public void turn() {

    }

    private boolean checkWin() {
        for (Player player : players) {
            if (player.getScore() == 0)
                return true;
        }
        return false;
    }

    public List<Player> getPlayerList() {
        return players;
    }
}
