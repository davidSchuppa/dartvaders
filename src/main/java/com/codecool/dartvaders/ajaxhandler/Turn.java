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
        int actualScore = Integer.parseInt(req.getParameter("actualScore"));
        game.getPlayerList().get(0).setActualScore(actualScore);
        System.out.println(game.getPlayerList().toString());
    }

}
