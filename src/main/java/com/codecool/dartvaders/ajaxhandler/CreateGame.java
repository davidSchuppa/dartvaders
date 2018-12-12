package com.codecool.dartvaders.ajaxhandler;

import com.codecool.dartvaders.model.Game;
import com.codecool.dartvaders.model.Player;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@WebServlet(urlPatterns = {"/create-game"})
public class CreateGame extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        Player player1 = PlayerDaoJdbc.getInstance().getPlayerByUsername(req.getParameter("p1Name"));
//        if (player1 == null) player1 = new Player(req.getParameter("p1Name"));
//        System.out.println(req.getParameter("p1Name"));
//        Player player2 = PlayerDaoJdbc.getInstance().getPlayerByUsername(req.getParameter("p2Name"));
//        if (player2 == null) player2 = new Player(req.getParameter("p2Name"));

        Player player1 = new Player(req.getParameter("p1Name"));
        Player player2 = new Player(req.getParameter("p2Name"));
        System.out.println(req.getParameter("p2Name"));
        String gameType = req.getParameter("gametype");
        List<Player> players = new ArrayList<>(Arrays.asList(player1, player2));
        int legs = Integer.parseInt(req.getParameter("legs"));
        Game game = new Game(legs, players, gameType);
        System.out.println("Created game");
        HttpSession session = req.getSession(true);
        session.setAttribute("game", game);
    }
}
