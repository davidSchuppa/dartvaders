package com.codecool.dartvaders.ajaxhandler;

import com.codecool.dartvaders.dao.implementation.PlayerDaoJdbc;
import com.codecool.dartvaders.model.Game;
import com.codecool.dartvaders.model.Player;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@WebServlet(urlPatterns = {"/create-game"})
public class CreateGame extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Player player1 = PlayerDaoJdbc.getInstance().getPlayerByUsername(req.getParameter("player1"));
        if (player1 == null) player1 = new Player("Guest1");
        Player player2 = PlayerDaoJdbc.getInstance().getPlayerByUsername(req.getParameter("player2"));
        if (player2 == null) player2 = new Player("Guest2");
        String gameType = req.getParameter("gametype");
        List<Player> players = new ArrayList<>(Arrays.asList(player1, player2));
        int legs = Integer.parseInt(req.getParameter("legs"));
        new Game(legs, players, gameType);
        resp.sendRedirect("/");
    }
}
