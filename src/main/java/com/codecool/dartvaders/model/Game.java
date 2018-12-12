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
    private int actualLeg = 1;

    public Game(int legs, List<Player> players, String gameType) {
        this.legs = legs;
        this.players = players;
        this.gameType = gameType;
        for (Player player: players) {
            player.setPointRemaining(Integer.parseInt(gameType));
        }
    }

    public Player findByName(String name) {
        for (Player player : players) {
            if (player.getName().equals(name)) {
                return player;
            }
        }
        return null;
    }

    public void turn(Player player) {
        for (Player listPlayer : players) {
            if (listPlayer.getName().equals(player.getName())) {
                listPlayer = player;
            }
        }
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

    public int getRound() {
        return round;
    }

    public int getActualLeg() {
        return actualLeg;
    }

    public void setActualLeg(int actualLeg) {
        this.actualLeg = actualLeg;
    }

    public void setHighestTurn(int highestTurn) {
        this.highestTurn = highestTurn;
    }


    public void setNumberOfDoubles(int numberOfDoubles) {
        this.numberOfDoubles = numberOfDoubles;
    }

    public void setNumberOfTriples(int numberOfTriples) {
        this.numberOfTriples = numberOfTriples;
    }

    public void setAverage(Player player) {
        double averagePerDart = (Integer.parseInt(gameType)-player.getPointRemaining()) / (round*3.0);
        player.setScorePerDart(averagePerDart);
        double averagePerRound = (Integer.parseInt(gameType) - player.getPointRemaining()) / (round*1.0);
        player.setScorePerRound(averagePerRound);
    }

}
