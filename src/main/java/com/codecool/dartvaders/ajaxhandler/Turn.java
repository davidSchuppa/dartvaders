package com.codecool.dartvaders.ajaxhandler;

import com.codecool.dartvaders.dao.implementation.PlayerDaoJdbc;
import com.codecool.dartvaders.model.Game;
import com.codecool.dartvaders.model.Player;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(urlPatterns = {"/turn"})
public class Turn extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession(false);

        Game game = (Game) session.getAttribute("game");
        int actualLeg = Integer.parseInt(req.getParameter("actualLeg"));
        int numberOfDoubles = Integer.parseInt(req.getParameter("numberOfDoubles"));
        int numberOfTriples = Integer.parseInt(req.getParameter("numberOfTriples"));
        int round = Integer.parseInt(req.getParameter("round"));

        Player actualPlayer = game.findByName(req.getParameter("player"));
        int actualScore = Integer.parseInt(req.getParameter("actualScore"));
        int bestOfThree = Integer.parseInt(req.getParameter("bestOfThree"));
        int pointRemaining = Integer.parseInt(req.getParameter("pointRemaining"));
//        int legsWon = Integer.parseInt(req.getParameter("legsWon"));
        Player winner = game.findByName(req.getParameter("winner"));
        double avgPerDart = Double.parseDouble(req.getParameter("avgPerDart"));
        double avgPerRound = Double.parseDouble(req.getParameter("avgPerRound"));

        game.setActualLeg(actualLeg);
        game.setNumberOfDoubles(numberOfDoubles);
        game.setNumberOfTriples(numberOfTriples);
        game.setRound(++round);
        game.setWinner(winner);

        actualPlayer.setActualScore(actualScore);
        actualPlayer.setBestOfThree(bestOfThree);
        actualPlayer.setPointRemaining(pointRemaining);
        actualPlayer.setScorePerDart(avgPerDart);
        actualPlayer.setScorePerRound(avgPerRound);

    }

}
