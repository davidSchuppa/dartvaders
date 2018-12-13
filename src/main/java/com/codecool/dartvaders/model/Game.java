package com.codecool.dartvaders.model;

import javax.swing.text.NumberFormatter;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

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
        for (Player player : players) {
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

    public void turn() {
        round += 1;
        changeLeg();
    }

    private void changeLeg() {
        if (checkLegWin()) {
            actualLeg += 1;
            round = 0;
        }
    }

    private boolean checkLegWin() {
        for (Player player : players) {
            if (player.getScore() == 0) {
                checkGameWin();
                player.setLegsWon(player.getLegsWon() + 1);
                return true;
            }
        }
        return false;
    }

    private void checkGameWin() {
        if (actualLeg == legs) {
            for (Player player : players) {
                if (player.getScore() == 0) {
                    setWinner(player);
                }
            }
        }
    }

    private void setWinner(Player player) {
        winner = player;
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
        double averagePerDart = (((Integer.parseInt(gameType) - player.getPointRemaining()) / round) / 3.0);
        String avgPerDart = new DecimalFormat("0.#").format(averagePerDart);
        player.setScorePerDart(Double.parseDouble(avgPerDart));
        double averagePerRound = averagePerDart * 3.0;
        String avgPerRound = new DecimalFormat("0.#").format(averagePerRound);
        player.setScorePerRound(Double.parseDouble(avgPerRound));
    }

}
