
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Edit, Plus, Eye } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import pb from '@/lib/pocketbaseClient';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [projectsData, skillsData, experiencesData, certificationsData, contactsData] = await Promise.all([
        pb.collection('projects').getFullList({ sort: '-created', $autoCancel: false }),
        pb.collection('skills').getFullList({ sort: '-proficiency', $autoCancel: false }),
        pb.collection('experience').getFullList({ sort: '-startDate', $autoCancel: false }),
        pb.collection('certifications').getFullList({ sort: '-issueDate', $autoCancel: false }),
        pb.collection('contacts').getFullList({ sort: '-created', $autoCancel: false })
      ]);

      setProjects(projectsData);
      setSkills(skillsData);
      setExperiences(experiencesData);
      setCertifications(certificationsData);
      setContacts(contactsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (collection, id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    try {
      await pb.collection(collection).delete(id, { $autoCancel: false });
      toast.success('Item deleted successfully');
      fetchAllData();
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error('Failed to delete item');
    }
  };

  const handleEdit = (item, type) => {
    setEditingItem({ ...item, type });
    setIsDialogOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      if (editingItem.id) {
        await pb.collection(editingItem.type).update(editingItem.id, data, { $autoCancel: false });
        toast.success('Item updated successfully');
      } else {
        await pb.collection(editingItem.type).create(data, { $autoCancel: false });
        toast.success('Item created successfully');
      }
      setIsDialogOpen(false);
      setEditingItem(null);
      fetchAllData();
    } catch (error) {
      console.error('Error saving item:', error);
      toast.error('Failed to save item');
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Nitesh Sen</title>
        <meta name="description" content="Admin dashboard for managing portfolio content." />
      </Helmet>

      <Header />

      <main className="pt-16 min-h-screen bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
                <TabsTrigger value="contacts">Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="projects">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Projects</CardTitle>
                        <CardDescription>Manage your portfolio projects</CardDescription>
                      </div>
                      <Button onClick={() => { setEditingItem({ type: 'projects' }); setIsDialogOpen(true); }}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Technologies</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projects.map((project) => (
                          <TableRow key={project.id}>
                            <TableCell className="font-medium">{project.title}</TableCell>
                            <TableCell className="max-w-xs truncate">{project.description}</TableCell>
                            <TableCell>{project.technologies}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => handleEdit(project, 'projects')}>
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete('projects', project.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Skills</CardTitle>
                        <CardDescription>Manage your technical skills</CardDescription>
                      </div>
                      <Button onClick={() => { setEditingItem({ type: 'skills' }); setIsDialogOpen(true); }}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Skill
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Skill Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Proficiency</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {skills.map((skill) => (
                          <TableRow key={skill.id}>
                            <TableCell className="font-medium">{skill.skillName}</TableCell>
                            <TableCell>{skill.category}</TableCell>
                            <TableCell>{skill.proficiency}%</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => handleEdit(skill, 'skills')}>
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete('skills', skill.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Experience</CardTitle>
                        <CardDescription>Manage your work experience</CardDescription>
                      </div>
                      <Button onClick={() => { setEditingItem({ type: 'experience' }); setIsDialogOpen(true); }}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Company</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {experiences.map((exp) => (
                          <TableRow key={exp.id}>
                            <TableCell className="font-medium">{exp.company}</TableCell>
                            <TableCell>{exp.role}</TableCell>
                            <TableCell>{exp.duration}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => handleEdit(exp, 'experience')}>
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete('experience', exp.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="certifications">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Certifications</CardTitle>
                        <CardDescription>Manage your certifications</CardDescription>
                      </div>
                      <Button onClick={() => { setEditingItem({ type: 'certifications' }); setIsDialogOpen(true); }}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Certification
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Issuer</TableHead>
                          <TableHead>Issue Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {certifications.map((cert) => (
                          <TableRow key={cert.id}>
                            <TableCell className="font-medium">{cert.title}</TableCell>
                            <TableCell>{cert.issuer}</TableCell>
                            <TableCell>{cert.issueDate}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => handleEdit(cert, 'certifications')}>
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete('certifications', cert.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contacts">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Messages</CardTitle>
                    <CardDescription>View messages from your contact form</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts.map((contact) => (
                          <TableRow key={contact.id}>
                            <TableCell className="font-medium">{contact.name}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.subject}</TableCell>
                            <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                            <TableCell>{new Date(contact.created).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <Button variant="destructive" size="sm" onClick={() => handleDelete('contacts', contact.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingItem?.id ? 'Edit' : 'Add'} {editingItem?.type}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            {editingItem?.type === 'projects' && (
              <>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" defaultValue={editingItem.title} required className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" defaultValue={editingItem.description} required className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="technologies">Technologies (comma-separated)</Label>
                  <Input id="technologies" name="technologies" defaultValue={editingItem.technologies} className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="githubURL">GitHub URL</Label>
                  <Input id="githubURL" name="githubURL" defaultValue={editingItem.githubURL} className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="liveURL">Live URL</Label>
                  <Input id="liveURL" name="liveURL" defaultValue={editingItem.liveURL} className="text-foreground" />
                </div>
              </>
            )}

            {editingItem?.type === 'skills' && (
              <>
                <div>
                  <Label htmlFor="skillName">Skill Name</Label>
                  <Input id="skillName" name="skillName" defaultValue={editingItem.skillName} required className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" defaultValue={editingItem.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Frontend">Frontend</SelectItem>
                      <SelectItem value="Backend">Backend</SelectItem>
                      <SelectItem value="Databases">Databases</SelectItem>
                      <SelectItem value="Tools">Tools</SelectItem>
                      <SelectItem value="Core Concepts">Core Concepts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="proficiency">Proficiency (0-100)</Label>
                  <Input id="proficiency" name="proficiency" type="number" min="0" max="100" defaultValue={editingItem.proficiency} required className="text-foreground" />
                </div>
              </>
            )}

            {editingItem?.type === 'experience' && (
              <>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" defaultValue={editingItem.company} required className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" name="role" defaultValue={editingItem.role} required className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" name="duration" defaultValue={editingItem.duration} className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" defaultValue={editingItem.description} className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" name="startDate" type="date" defaultValue={editingItem.startDate} className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" name="endDate" type="date" defaultValue={editingItem.endDate} className="text-foreground" />
                </div>
              </>
            )}

            {editingItem?.type === 'certifications' && (
              <>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" defaultValue={editingItem.title} required className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="issuer">Issuer</Label>
                  <Input id="issuer" name="issuer" defaultValue={editingItem.issuer} required className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="issueDate">Issue Date</Label>
                  <Input id="issueDate" name="issueDate" type="date" defaultValue={editingItem.issueDate} className="text-foreground" />
                </div>
                <div>
                  <Label htmlFor="credentialURL">Credential URL</Label>
                  <Input id="credentialURL" name="credentialURL" defaultValue={editingItem.credentialURL} className="text-foreground" />
                </div>
              </>
            )}

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default AdminDashboard;
