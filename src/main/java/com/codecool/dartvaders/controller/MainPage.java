package com.codecool.dartvaders.controller;

import com.codecool.dartvaders.config.TemplateEngineUtil;
import com.codecool.dartvaders.model.Game;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.WebContext;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet(urlPatterns = {"/"})
public class MainPage extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession(false);
        Map params = new HashMap<>();
        if (session != null) {
            Game game = (Game) session.getAttribute("game");
            params.put("playerone", game.getPlayerList().get(0));
            params.put("playertwo", game.getPlayerList().get(1));
            params.put("game", game);
        }
        TemplateEngine engine = TemplateEngineUtil.getTemplateEngine(req.getServletContext());
        WebContext context = new WebContext(req, resp, req.getServletContext());
        context.setVariables(params);
        engine.process("index.html", context, resp.getWriter());
    }
}

