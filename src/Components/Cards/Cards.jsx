import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Cards/Cards.css'

const Cards = ({ cards }) => (
    <div class="grid-container" key={cards.id}>
        <div class="grid-item">
            <Card sx={{ maxWidth: 400, height: '100%' }}>
                <CardMedia
                    component="img"
                    alt="cards"
                    image={cards.image}
                />
                <CardContent style={{height: '150px'}}>
                    <Typography variant="body2" color="text.secondary">
                        {cards.content}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ul>
                            {cards.lista.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button href={cards.movie} variant="outlined" size="small" className="btn-green">
                        Ver Projeto
                    </Button>
                    <Button href={cards.github} variant="outlined" size="small" className="btn-azul">
                        Código
                    </Button>
                </CardActions>
            </Card>
        </div>
    </div>
)

export default Cards;