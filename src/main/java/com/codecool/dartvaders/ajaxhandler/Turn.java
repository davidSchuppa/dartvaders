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
//        int actualLeg = Integer.parseInt(req.getParameter("actualLeg"));
//        int highestTurn = Integer.parseInt(req.getParameter("highestTurn"));
        int numberOfDoubles = Integer.parseInt(req.getParameter("numberOfDoubles"));
        int numberOfTriples = Integer.parseInt(req.getParameter("numberOfTriples"));

        Player actualPlayer = game.findByName(req.getParameter("player"));
        int actualScore = Integer.parseInt(req.getParameter("actualScore"));
        int bestOfThree = Integer.parseInt(req.getParameter("bestOfThree"));
        int pointRemaining = Integer.parseInt(req.getParameter("pointRemaining"));
//        int legsWon = Integer.parseInt(req.getParameter("legsWon"));
        Player winner = game.findByName(req.getParameter("winner"));

//        game.setActualLeg(actualLeg);
//        game.setHighestTurn(highestTurn);
        game.setNumberOfDoubles(numberOfDoubles);
        game.setNumberOfTriples(numberOfTriples);

        actualPlayer.setActualScore(actualScore);
        actualPlayer.setBestOfThree(bestOfThree);
        actualPlayer.setPointRemaining(pointRemaining);
//        actualPlayer.setLegsWon(legsWon);

        game.setAverage(actualPlayer);

        if (actualPlayer.equals(game.getPlayerList().get(1))) {
            game.turn();
        }

    }

}
