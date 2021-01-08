from django.db import models

class Challenge(models.Model):
    name = models.CharField(max_length=60)
    city = models.CharField(max_length=60, default='Unknown')
    organizer = models.CharField(max_length=60, default='Anonymous')
    duration = models.PositiveIntegerField(default=30)
    reward = models.PositiveIntegerField(default=100)

class Charity(models.Model):
    name = models.CharField(max_length=60)
    picture_link = models.CharField(max_length=1000, blank=True, null=True) 
    amount = models.PositiveIntegerField(default=5)  # Amount given to charity
    cost = models.PositiveIntegerField(default=1000)  # Points needed to redeem

class Issue(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=500, blank=True, null=True)
    challenge = models.ManyToManyField(Challenge)
    charity = models.ManyToManyField(Charity)

class Prize(models.Model):
    name = models.CharField(max_length=60)
    picture_link = models.CharField(max_length=1000, blank=True, null=True)
    amount = models.PositiveIntegerField(default=5)  # Amount you receive
    cost = models.PositiveIntegerField(default=1000)  # Points needed to redeem

class Badge(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=60, blank=True)
    picture_link = models.CharField(max_length=1000, blank=True) 

class User(models.Model):
    name = models.CharField(max_length=60, default='Guest')
    deeds = models.PositiveIntegerField(default=0)
    score = models.PositiveIntegerField(default=0)
    rank = models.PositiveIntegerField(default=2109)
    goals = models.ManyToManyField(Challenge)
    friends = models.ManyToManyField('self')
    badges = models.ManyToManyField(Badge)




